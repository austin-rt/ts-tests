import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
import { Tag, RawNote, NoteData } from './models/types';
import { useLocalStorage } from './hooks/useLocalStorage';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';
import NoteLayout from './components/NoteLayout';
import Note from './components/Note';
import EditNote from './components/EditNote';

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {
        ...note,
        tags: tags.filter(tag => note.tagIds.includes(tag.id))
      };
    });
  }, [notes, tags]);

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }
      ];
    });
  };

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) };
        } else {
          return note;
        }
      });
    });
  };

  const onDeleteNote = (id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const addTag = (tag: Tag) => {
    setTags(prev => [...prev, tag]);
  };

  const updateTag = (id: string, label: string) => {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  };

  const deleteTag = (id: string) => {
    setTags(prevTags => prevTags.filter(tag => tag.id !== id));
  };

  return (
    <Container className='my-4'>
      <Routes>
        <Route
          path='/'
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
              onUpdate={updateTag}
              onDelete={deleteTag}
            />
          }
        />
        <Route
          path='/new'
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route
          path=':id'
          element={<NoteLayout notes={notesWithTags} />}
        >
          <Route
            index
            element={<Note onDelete={onDeleteNote} />}
          />
          <Route
            path='edit'
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </Container>
  );
}

export default App;
