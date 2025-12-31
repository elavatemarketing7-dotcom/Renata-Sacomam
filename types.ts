
export type AppState = 'choice' | 'quiz' | 'result' | 'site';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizResult {
  [key: number]: string;
}
