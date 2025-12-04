export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LeaderProfile {
  name: string;
  role?: string;
  contact: string;
  image: string;
}

export interface SubjectItem {
  title: string;
  description: string;
  icon: 'BookOpen' | 'GraduationCap' | 'Users' | 'HeartHandshake';
}