import { Form, Row, Stack, Col,Button } from "react-bootstrap";
import CreatableReactSelect from 'react-select/creatable'
import { Link } from "react-router-dom";
import { useRef } from "react";
const NoteForm: React.FC = () => {

    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Form>
      <Stack gap={4}>
        <Row>

            {/* Title */}
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required ref={titleRef} />
            </Form.Group>
          </Col>
            {/* Tags */}
          <Col>
            <Form.Group controlId="tag">
              <Form.Label>Tag</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
            {/* Markdown */}
            <Form.Group controlId="markdown">
              <Form.Label>Body</Form.Label>
              <Form.Control required as="textarea" rows={15} ref={markdownRef} />
              
            </Form.Group>
            <Stack direction="horizontal" gap={2} className="justify-content-end ">
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to='..'>

                    <Button type="button" variant="outline-secondary">Cancel</Button>
                    </Link>
            </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
