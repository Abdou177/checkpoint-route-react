import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";

const AddForm = ({ addPerson }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const addd = () => {
    addPerson({ id: Date.now(), name, status, description, image });
  };
  return (
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

      <Link to="/persons">
        {" "}
        <Button onClick={addd}>add person</Button>
      </Link>
    </Form>
  );
};

export default AddForm;
