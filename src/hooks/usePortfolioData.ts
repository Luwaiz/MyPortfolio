import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import type { Project, Profile } from "../types";

interface PortfolioData {
  projects: Project[];
  profile: Profile | null;
  loading: boolean;
}

export function usePortfolioData(): PortfolioData {
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [projectsSnap, profileSnap] = await Promise.all([
        getDocs(query(collection(db, "projects"), orderBy("order"))),
        getDoc(doc(db, "content", "profile")),
      ]);

      setProjects(
        projectsSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Project))
      );

      if (profileSnap.exists()) {
        setProfile(profileSnap.data() as Profile);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return { projects, profile, loading };
}
