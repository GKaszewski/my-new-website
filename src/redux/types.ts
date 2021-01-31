export interface Project {
  name: string;
  technology: string[];
  shortDescription: string;
  description: string;
  category: string;
  githubUrl: string;
  downloadUrl: string;
  visitUrl: string;
  thumbnailUrls: string[];
}

interface Author {
  username: string;
}

export interface Post {
  id?: number;
  status: number;
  title: string;
  slug?: string;
  author?: Author;
  content: string;
  created_on?: Date;
  category: string;
}

export interface Trivia {
  name: string;
  content: string;
  slug: string;
}

export interface Skill {
  name: string;
}

export interface Job {
  id: number;
  position: string;
  company: string;
  time: string;
  technologies: string[];
}

export interface StoreState {
  projects: Project[];
  posts: Post[];
  trivias: Trivia[];
  loggedIn: boolean;
}
