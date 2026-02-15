export interface SORItem {
  id: string;
  description: string;
  qty: number | string;
  unit: string;
  rate: number;
  amount: number;
  dsrCode?: string;
  make?: string;
}

export interface SORSubHead {
  id: string;
  title: string;
  items: SORItem[];
}

export interface ApprovedMake {
  id: string;
  item: string;
  manufacturers: string;
  category: string;
}

export interface ProjectSummary {
  name: string;
  location: string;
  estimatedCost: {
    civil: number;
    electrical: number;
    total: number;
  };
  nitNo: string;
  emd: number;
  completionPeriod: string;
  bidSubmissionDate: string;
}