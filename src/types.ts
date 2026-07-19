export type DefectCategory = 'Critical' | 'Major' | 'Minor';

export interface Defect {
  id: number;
  name: string;
  bengaliName: string;
  categories: DefectCategory[];
  reasoning?: {
    Critical?: string;
    Major?: string;
    Minor?: string;
  };
  image: string;
}
