import {
  useParams,
  Navigate,
  Outlet,
  useOutletContext
} from 'react-router-dom';
import { NoteLayoutProps } from '../models/propTypes';
import { Note } from '../models/types';

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find(n => n.id === id);
  if (!note)
    return (
      <Navigate
        to='/'
        replace
      />
    );

  return <Outlet context={note} />;
};

export default NoteLayout;

export const useNote = () => {
  return useOutletContext<Note>();
};
