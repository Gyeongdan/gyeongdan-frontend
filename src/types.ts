export interface Article {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  imageUrl?: string;
  viewCount: number;
  category: string;
  relatedDocuments?: Document[];
  isValid: boolean;
}

export interface Document {
  id: number;
  title: string;
  link: string;
  snippet: string;
}

export interface Question {
  title: string;
  option1: { option: string };
  option2: { option: string };
  option3: { option: string };
}
