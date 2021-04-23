import React, { useState } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";

function ModalExampleModal({ person, handleEdit }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(person.name);
  const [status, setStatus] = useState(person.status);
  const [description, setDescription] = useState(person.description);
  const [image, setImage] = useState(person.image);

  const editt = () => {
    handleEdit(person.id, { name, status, description, image });
    setOpen(false);
    setName(person.name);
    setDescription(person.description);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button basic color="green">
          Edit
        </Button>
      }
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Form>
          <Form.Field>
            <label> Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>status</label>
            <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Last Name"
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="save"
          labelPosition="right"
          icon="checkmark"
          onClick={editt}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleModal;
