import { NoteData } from './types';

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};
