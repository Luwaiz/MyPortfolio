import { collection, doc, setDoc, writeBatch } from "firebase/firestore";
import { db } from "./firebase";
import type { Project, Profile } from "./types";

const projects: Omit<Project, "id">[] = [
  {
    title: "KRides",
    description:
      "A full-featured transportation mobile app for booking tricycles within vast institutions built with React Native, Firebase and Express.js backend.",
    imageUrl:
      "https://res.cloudinary.com/dmutxmoj3/image/upload/v1760514688/Screenshot_2025-10-15-08-42-03-125_com.eluwaiz.KRides_xnhztw.jpg",
    imageAlt: "KRides App",
    badges: [
      { label: "React Native", color: "primary" },
      { label: "Express.js", color: "success" },
      { label: "Figma", color: "warning" },
      { label: "Firebase", color: "success" },
    ],
    buttonLabel: "View Details",
    defaultVisible: true,
    order: 0,
  },
  {
    title: "Cause Planner",
    description:
      'An AI-powered academic productivity platform featuring an "AI Study Buddy" that automates syllabus organization and quiz generation, with Optimistic UI and offline queues for seamless performance.',
    imageUrl:
      "https://res.cloudinary.com/dmutxmoj3/image/upload/v1778433707/cause_ios_logo_payboj.png",
    imageAlt: "Cause Planner",
    badges: [
      { label: "React Native", color: "primary" },
      { label: "Node.js", color: "success" },
      { label: "LLM", color: "info" },
    ],
    buttonLabel: "View Details",
    defaultVisible: true,
    order: 1,
  },
  {
    title: "Asthma",
    description:
      "A cutting-edge asthma management tool combining React Native with a dual-engine AI backend (Gemini & OpenAI) for real-time risk assessments and personalized health coaching.",
    imageUrl:
      "https://res.cloudinary.com/dmutxmoj3/image/upload/v1778434137/logo_mlp1vv.jpg",
    imageAlt: "Asthma Management App",
    badges: [
      { label: "React Native", color: "primary" },
      { label: "TypeScript", color: "primary" },
      { label: "Firebase", color: "success" },
      { label: "AI", color: "info" },
    ],
    buttonLabel: "View Details",
    defaultVisible: true,
    order: 2,
  },
  {
    title: "Expense Tracking App",
    description:
      "An intuitive expense tracking mobile app to help users manage their finances effectively.",
    imageUrl:
      "https://res.cloudinary.com/dmutxmoj3/image/upload/v1760514940/XpensePage_aulc1k.jpg",
    imageAlt: "Expense Tracking App",
    badges: [
      { label: "React Native", color: "primary" },
      { label: "Node.js", color: "success" },
      { label: "Figma", color: "warning" },
    ],
    buttonLabel: "View Details",
    defaultVisible: false,
    order: 3,
  },
  {
    title: "Tutor App",
    description:
      "A mobile app connecting students with study materials for various subjects, featuring quiz functionalities and progress tracking.",
    imageUrl:
      "https://res.cloudinary.com/dmutxmoj3/image/upload/v1760514908/TutorPage_mhvvus.jpg",
    imageAlt: "Tutor App",
    badges: [
      { label: "React Native", color: "primary" },
      { label: "Figma", color: "warning" },
      { label: "Firebase", color: "success" },
    ],
    buttonLabel: "View Design",
    defaultVisible: false,
    order: 4,
  },
];

const profile: Profile = {
  heroSubtitle: "Mobile App Developer | Product Designer",
  aboutText:
    "I'm an innovative Software Engineer with a B.Sc. in Software Engineering from Babcock University and a proven track record of architecting full-stack mobile and web solutions. I specialize in React Native (Expo), Node.js, and Firebase, with hands-on experience integrating AI/LLMs for academic productivity and building real-time systems for logistics. As a natural leader, I've managed cross-functional teams and overseen the full SDLC from UI/UX design to production deployment on major app stores.",
  yearsExperience: "3+",
  appsBuilt: "10+",
  happyClients: "5+",
  email: "emmaeluwa2021@gmail.com",
  linkedinUrl: "https://linkedin.com/in/emmanuel-eluwa-138606276/",
  linkedinLabel: "linkedin.com/in/emmanuel-eluwa",
};

export async function seedFirestore() {
  const batch = writeBatch(db);

  // Seed projects
  const projectsCol = collection(db, "projects");
  for (const project of projects) {
    const ref = doc(projectsCol);
    batch.set(ref, project);
  }

  // Seed profile
  const profileRef = doc(db, "content", "profile");
  batch.set(profileRef, profile);

  await batch.commit();
  console.log("Firestore seeded successfully.");
}
