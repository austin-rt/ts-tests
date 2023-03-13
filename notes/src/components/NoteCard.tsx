import { Link } from 'react-router-dom';
import { Badge, Card, Stack } from 'react-bootstrap';
import { NoteCardProps } from '../models/propTypes';
import styles from '../styles/NoteList.module.css';

const NoteCard = ({ id, title, tags }: NoteCardProps) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className='align-items-center justify-content-center h-100'
        >
          <span className='fs-5'>{title}</span>
          {tags.length && (
            <Stack
              direction='horizontal'
              gap={1}
              className='justify-content-center flex-wrap'
            >
              {tags.map(tag => (
                <Badge
                  key={tag.id}
                  className='text-truncate'
                >
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
};
export default NoteCard;
