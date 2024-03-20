export type JournalEntry = {
  _ownerId: string;
  title: string;
  category: string;
  journalEntry: string;
  blog: boolean;
  _createdOn: number;
  _editedOn: number;
  _id: string;
  authorName?: string;
};

export type CreateJournalEntry = {
  title: string;
  category: string;
  journalEntry: string;
  blog: boolean;
  authorName?: string;
};
