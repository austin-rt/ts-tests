import { NoteData, Tag } from './types';
import { Note } from './types';

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export type NoteListProps = {
  availableTags: Tag[];
  notes: Note[];
};

export type NoteCardProps = {
  tags: Tag[];
  title: string;
  id: string;
};
