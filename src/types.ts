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
