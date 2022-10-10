export default interface Bootcamp {
  name: string;
  slug: string;
  description: string;
  website?: string;
  phone?: string;
  email?: string;
  address: string;
  location?: { type: string; cordinates: Number[] };
  formattedAddress?: string;
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country?: string;
  careers: (
    | "Web Development"
    | "Mobile Development"
    | "UI/UX"
    | "Data Science"
    | "Business"
    | "Other"
  )[];
  averageRating: number;
  averageCost: number;
  photo: string;
  housing: boolean;
  jobAssistance: boolean;
  jobGuarantee: boolean;
  createdAt: Date;
}
