import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Note, NoteData, Tag, RawNote } from './models/types';
import NewNote from './components/NewNote';

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', []);
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', []);
  return (
    <Container className='my-4'>
      <Routes>
        <Route
          path='/'
          element={<h1>Home</h1>}
        />
        <Route
          path='/new'
          element={<NewNote />}
        />
        <Route path=':id'>
          <Route
            index
            element={<h1>Show</h1>}
          />
          <Route
            path='edit'
            element={<h1>Edit</h1>}
          />
        </Route>
        <Route
          path=' '
          element={<Navigate to='/' />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </Container>
  );
}

export default App;
