export interface PersonInfo {
  name: string;
  title: string;
  about: string;
}


export interface CertificateData {
  name: string;
  imageUrl: string;
  orgnization: string;
  earnedDate: string;
  expirationDate?: string | null;
  sourceUrl: string;
}