import { Button, Col, Form, Modal, Row, Stack } from 'react-bootstrap';
import { EditTagsModalProps } from '../models/propTypes';

const EditTagsModal = ({ availableTags }: EditTagsModalProps) => {
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
                  />
                </Col>
                <Col xs='auto'></Col>
                <Button variant='outline-danger'>&times;</Button>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditTagsModal;
