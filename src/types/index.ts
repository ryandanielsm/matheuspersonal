export type Theme = 'dark' | 'light';

export interface NavigationCardItem {
  id: string;
  title: string;
  subtitle: string;
  actionText: string;
  path: string;
  bgGradient: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: string;
}

export interface StudentCase {
  id: string;
  name: string;
  age: number;
  time: string;
  category: 'Hipertrofia' | 'Definição' | 'Recomposição' | 'Iniciantes';
  summary: string;
  testimonial: string;
  beforeWeight: string;
  afterWeight: string;
  beforeBf: string;
  afterBf: string;
  highlightBadge: string;
  beforeImage: string;
  afterImage: string;
  keyAchievements: string[];
}

export interface ApplicationFormData {
  fullName: string;
  age: string;
  phone: string;
  city: string;
  mainGoal: string;
  trainingExperience: string;
  weeklyFrequency: string;
  difficulties: string[];
  dietRoutine: string;
  notes: string;
}

export type FormErrors = Partial<Record<keyof ApplicationFormData, string>>;

