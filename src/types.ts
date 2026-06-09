export interface Badge {
  label: string;
  color: "primary" | "success" | "warning" | "info" | "danger" | "secondary";
}

export type ProjectCategory = "mobile" | "web";

export interface Project {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  badges: Badge[];
  buttonLabel: string;
  defaultVisible: boolean;
  order: number;
  // Optional so existing Firestore docs without it still load; defaults to "mobile" at render.
  category?: ProjectCategory;
  // Destination for the project card button. If empty, the button is shown disabled.
  linkUrl?: string;
}

export interface Profile {
  heroSubtitle: string;
  aboutText: string;
  yearsExperience: string;
  appsBuilt: string;
  happyClients: string;
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
}
