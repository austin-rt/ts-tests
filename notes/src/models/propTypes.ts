import { NoteData } from './types';

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};
