export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string | null;
  liveUrl?: string | null;
  githubUrl?: string | null;
  isPublished: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};