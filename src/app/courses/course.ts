export interface Course {
  id: string;
  title: string;
  creationDate: string;
  duration: string;
  description: string;
}

class CourseModel implements Course {
  id: string;
  title: string;
  creationDate: string;
  duration: string;
  description: string;
}
