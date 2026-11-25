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
  /** Real date the document first appeared; omit to hide the line. */
  effectiveDate?: string;
  updatedLabel: string;
  intro: string;
  sections: LegalSection[];
};
