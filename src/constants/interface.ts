export interface Project {
  id: number;
  title: string;
  link: string;
  technologies: string[];
  tasks: string[];
}
export interface ProjectProps {
  project: Project;
}