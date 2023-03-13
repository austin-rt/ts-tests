import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { useNote } from './NoteLayout';
import { Link } from 'react-router-dom';

const Note = () => {
  const note = useNote();

  return (
    <>
      <Row classNmae='align-items-center mb-4'>
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
              <Button
                variant='outline-danger'
                className='mx-2'
              >
                Delete
              </Button>
              <Link to='..'>
                <Button variant='outline-secondary'>Back</Button>
              </Link>
            </Link>
          </Stack>
        </Col>
      </Row>
    </>
  );
};
export default Note;
