import { useState, useEffect, FormEvent } from "react";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  setDoc,
  getDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import type { Project, Profile, Badge } from "../types";

const BADGE_COLORS = ["primary", "success", "warning", "info", "danger", "secondary"] as const;

const emptyProject: Omit<Project, "id"> = {
  title: "",
  description: "",
  imageUrl: "",
  imageAlt: "",
  badges: [],
  buttonLabel: "View Details",
  defaultVisible: true,
  order: 0,
};

const emptyProfile: Profile = {
  heroSubtitle: "",
  aboutText: "",
  yearsExperience: "",
  appsBuilt: "",
  happyClients: "",
  email: "",
  linkedinUrl: "",
  linkedinLabel: "",
};

export function Admin() {
  const [tab, setTab] = useState<"projects" | "profile">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectForm, setProjectForm] = useState<Omit<Project, "id">>(emptyProject);
  const [badgeInput, setBadgeInput] = useState({ label: "", color: "primary" as Badge["color"] });
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => { fetchProjects(); fetchProfile(); }, []);

  async function fetchProjects() {
    const snap = await getDocs(query(collection(db, "projects"), orderBy("order")));
    setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Project)));
  }

  async function fetchProfile() {
    const snap = await getDoc(doc(db, "content", "profile"));
    if (snap.exists()) setProfile(snap.data() as Profile);
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  }

  function openAddForm() {
    setEditingProject(null);
    setProjectForm({ ...emptyProject, order: projects.length });
    setShowProjectForm(true);
  }

  function openEditForm(project: Project) {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      imageAlt: project.imageAlt,
      badges: [...project.badges],
      buttonLabel: project.buttonLabel,
      defaultVisible: project.defaultVisible,
      order: project.order,
    });
    setShowProjectForm(true);
  }

  function cancelForm() {
    setShowProjectForm(false);
    setEditingProject(null);
    setBadgeInput({ label: "", color: "primary" });
  }

  function addBadge() {
    if (!badgeInput.label.trim()) return;
    setProjectForm((f) => ({ ...f, badges: [...f.badges, { ...badgeInput }] }));
    setBadgeInput({ label: "", color: "primary" });
  }

  function removeBadge(index: number) {
    setProjectForm((f) => ({ ...f, badges: f.badges.filter((_, i) => i !== index) }));
  }

  async function saveProject(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingProject?.id) {
        await updateDoc(doc(db, "projects", editingProject.id), { ...projectForm });
      } else {
        await addDoc(collection(db, "projects"), { ...projectForm });
      }
      await fetchProjects();
      cancelForm();
      showToast(editingProject ? "Project updated!" : "Project added!");
    } finally {
      setSaving(false);
    }
  }

  async function deleteProject(id: string) {
    if (!confirm("Delete this project?")) return;
    await deleteDoc(doc(db, "projects", id));
    await fetchProjects();
    showToast("Project deleted.");
  }

  async function toggleVisibility(project: Project) {
    await updateDoc(doc(db, "projects", project.id!), {
      defaultVisible: !project.defaultVisible,
    });
    await fetchProjects();
  }

  async function saveProfile(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await setDoc(doc(db, "content", "profile"), profile);
      showToast("Profile saved!");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* Toast */}
      {toast && (
        <div
          className="position-fixed top-0 end-0 m-3 alert alert-success py-2 px-3 shadow"
          style={{ zIndex: 9999 }}
        >
          {toast}
        </div>
      )}

      {/* Header */}
      <nav className="navbar bg-dark navbar-dark px-4 py-3">
        <span className="navbar-brand fw-bold mb-0">Portfolio Admin</span>
        <div className="d-flex gap-3 align-items-center">
          <a href="/" target="_blank" className="text-white-50 text-decoration-none small">
            View Site ↗
          </a>
          <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="container py-5">
        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${tab === "projects" ? "active" : ""}`}
              onClick={() => setTab("projects")}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${tab === "profile" ? "active" : ""}`}
              onClick={() => setTab("profile")}
            >
              Profile & About
            </button>
          </li>
        </ul>

        {/* ── PROJECTS TAB ── */}
        {tab === "projects" && (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold mb-0">Projects ({projects.length})</h4>
              <button className="btn btn-primary" onClick={openAddForm}>
                + Add Project
              </button>
            </div>

            {/* Project Form */}
            {showProjectForm && (
              <div className="card mb-4 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">
                    {editingProject ? "Edit Project" : "New Project"}
                  </h5>
                  <form onSubmit={saveProject}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Title</label>
                        <input
                          className="form-control"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm((f) => ({ ...f, title: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Button Label</label>
                        <input
                          className="form-control"
                          value={projectForm.buttonLabel}
                          onChange={(e) => setProjectForm((f) => ({ ...f, buttonLabel: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="col-md-3">
                        <label className="form-label">Order</label>
                        <input
                          type="number"
                          className="form-control"
                          value={projectForm.order}
                          onChange={(e) => setProjectForm((f) => ({ ...f, order: Number(e.target.value) }))}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={projectForm.description}
                          onChange={(e) => setProjectForm((f) => ({ ...f, description: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Image URL (Cloudinary)</label>
                        <input
                          className="form-control"
                          value={projectForm.imageUrl}
                          onChange={(e) => setProjectForm((f) => ({ ...f, imageUrl: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Image Alt Text</label>
                        <input
                          className="form-control"
                          value={projectForm.imageAlt}
                          onChange={(e) => setProjectForm((f) => ({ ...f, imageAlt: e.target.value }))}
                        />
                      </div>

                      {/* Badges */}
                      <div className="col-12">
                        <label className="form-label">Badges</label>
                        <div className="d-flex gap-2 flex-wrap mb-2">
                          {projectForm.badges.map((b, i) => (
                            <span key={i} className={`badge bg-${b.color} d-flex align-items-center gap-1`}>
                              {b.label}
                              <button
                                type="button"
                                className="btn-close btn-close-white"
                                style={{ fontSize: "0.6rem" }}
                                onClick={() => removeBadge(i)}
                              />
                            </span>
                          ))}
                        </div>
                        <div className="d-flex gap-2">
                          <input
                            className="form-control"
                            placeholder="Badge label"
                            value={badgeInput.label}
                            onChange={(e) => setBadgeInput((b) => ({ ...b, label: e.target.value }))}
                            style={{ maxWidth: 200 }}
                          />
                          <select
                            className="form-select"
                            style={{ maxWidth: 140 }}
                            value={badgeInput.color}
                            onChange={(e) => setBadgeInput((b) => ({ ...b, color: e.target.value as Badge["color"] }))}
                          >
                            {BADGE_COLORS.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                          <button type="button" className="btn btn-outline-secondary" onClick={addBadge}>
                            Add
                          </button>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="defaultVisible"
                            checked={projectForm.defaultVisible}
                            onChange={(e) => setProjectForm((f) => ({ ...f, defaultVisible: e.target.checked }))}
                          />
                          <label className="form-check-label" htmlFor="defaultVisible">
                            Show by default (visible without clicking "See All")
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-2 mt-4">
                      <button type="submit" className="btn btn-primary" disabled={saving}>
                        {saving ? "Saving…" : editingProject ? "Save Changes" : "Add Project"}
                      </button>
                      <button type="button" className="btn btn-outline-secondary" onClick={cancelForm}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Project List */}
            <div className="row g-3">
              {projects.map((project) => (
                <div key={project.id} className="col-12">
                  <div className="card shadow-sm">
                    <div
                      className="card-body d-flex align-items-start gap-3 p-3"
                      style={{ overflow: "hidden", cursor: "pointer" }}
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id!)}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 8, flexShrink: 0 }}
                      />
                      <div className="flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                          <h6 className="fw-bold mb-0">{project.title}</h6>
                          <span className={`badge ${project.defaultVisible ? "bg-success" : "bg-secondary"}`}>
                            {project.defaultVisible ? "Visible" : "Hidden"}
                          </span>
                          <span className="badge bg-light text-dark border">#{project.order}</span>
                        </div>
                        <p className="text-muted small mb-1" style={
                          expandedId === project.id
                            ? {}
                            : { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }
                        }>
                          {project.description}
                        </p>
                        <div className="d-flex gap-1 flex-wrap">
                          {project.badges.map((b) => (
                            <span key={b.label} className={`badge bg-${b.color}`}>{b.label}</span>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => toggleVisibility(project)}
                          title={project.defaultVisible ? "Hide project" : "Show project"}
                        >
                          {project.defaultVisible ? "Hide" : "Show"}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => openEditForm(project)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteProject(project.id!)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PROFILE TAB ── */}
        {tab === "profile" && (
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Profile & About</h4>
              <form onSubmit={saveProfile}>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Hero Subtitle</label>
                    <input
                      className="form-control"
                      value={profile.heroSubtitle}
                      onChange={(e) => setProfile((p) => ({ ...p, heroSubtitle: e.target.value }))}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">About Text</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      value={profile.aboutText}
                      onChange={(e) => setProfile((p) => ({ ...p, aboutText: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Years Experience</label>
                    <input
                      className="form-control"
                      value={profile.yearsExperience}
                      onChange={(e) => setProfile((p) => ({ ...p, yearsExperience: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Apps Built</label>
                    <input
                      className="form-control"
                      value={profile.appsBuilt}
                      onChange={(e) => setProfile((p) => ({ ...p, appsBuilt: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Happy Clients</label>
                    <input
                      className="form-control"
                      value={profile.happyClients}
                      onChange={(e) => setProfile((p) => ({ ...p, happyClients: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={profile.email}
                      onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">LinkedIn URL</label>
                    <input
                      className="form-control"
                      value={profile.linkedinUrl}
                      onChange={(e) => setProfile((p) => ({ ...p, linkedinUrl: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">LinkedIn Display Label</label>
                    <input
                      className="form-control"
                      value={profile.linkedinLabel}
                      onChange={(e) => setProfile((p) => ({ ...p, linkedinLabel: e.target.value }))}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4" disabled={saving}>
                  {saving ? "Saving…" : "Save Profile"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
