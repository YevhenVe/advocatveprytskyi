export type LegalListItem = { label?: string; text: string };

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: LegalListItem[];
  note?: string;
  contacts?: { label: string; value: string }[];
};

export type LegalDocumentContent = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  titleBefore: string;
  titleAccent: string;
  effectiveLabel: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
};
