export interface Badge {
  label: string;
  color: "primary" | "success" | "warning" | "info" | "danger" | "secondary";
}

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
