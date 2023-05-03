export interface Project {
	name: string;
	technology: string[];
	shortDescription: string;
	description: string;
	category: string;
	githubUrl: string;
	downloadUrl: string;
	visitUrl: string;
	thumbnails: Thumbnail[];
}

interface Thumbnail {
	file: string;
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
	start_date: Date;
	end_date: Date;
	still_working: boolean;
}

export interface FileUpload {
	data: File;
}

export interface FileFromBackend {
	file_id: number;
	file: string;
	since_added: Date;
	size: number;
	name: string;
	filetype: string;
}

export interface StoreState {
	projects: Project[];
	posts: Post[];
	trivias: Trivia[];
	loggedIn: boolean;
	fetchedFiles: FileFromBackend[];
}
