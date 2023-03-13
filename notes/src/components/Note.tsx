import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useNote } from './NoteLayout';
import { NoteProps } from '../models/propTypes';

const Note = ({ onDelete }: NoteProps) => {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className='align-items-center mb-4'>
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length && (
            <Stack
              direction='horizontal'
              gap={1}
              className='flex-wrap'
            >
              {note.tags.map(tag => (
                <Badge
                  key={tag.id}
                  className='text-truncate'
                >
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs='auto'>
          <Stack
            gap={2}
            direction='horizontal'
          >
            <Link to={`/${note.id}/edit`}>
              <Button variant='primary'>Edit</Button>
            </Link>
            <Button
              variant='outline-danger'
              onClick={() => {
                onDelete(note.id);
                navigate('/');
              }}
            >
              Delete
            </Button>
            <Link to='/'>
              <Button variant='outline-secondary'>Home</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
};
export default Note;
