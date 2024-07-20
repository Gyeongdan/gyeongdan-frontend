export interface Article {
  id: number;
  title: string;
  content: string;
  comment?: string;
  publisher?: string;
  publishedAt: string;
  url?: string;
  imageUrl?: string;
  viewCount: number;
  category: string;
  phrase?: { [key: string]: string };
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

export interface Village {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  x: number;
  y: number;
  publishedAt: string;
}
