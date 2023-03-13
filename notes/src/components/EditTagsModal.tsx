import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap';
import { EditTagsModalProps } from '../models/propTypes';

const EditTagsModal = ({
  availableTags,
  handleClose,
  show,
  onUpdate,
  onDelete
}: EditTagsModalProps) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map(tag => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type='text'
                    value={tag.label}
                    onChange={e => {
                      onUpdate(tag.id, e.target.value);
                    }}
                  />
                </Col>
                <Col xs='auto'>
                  <Button
                    onClick={e => {
                      onDelete(tag.id);
                    }}
                    variant='outline-danger'
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditTagsModal;
