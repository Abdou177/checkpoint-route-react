import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import EditModal from "./EditModal";
const CardExampleGroups = ({ person, handleDelete, handleEdit }) => {
  return (
    <Card style={{ margin: "10px" }}>
      <Card.Content>
        <Link to={`/profile/${person.id}`}>
          <Image floated="right" size="mini" src={person.image} />
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>{person.status}</Card.Meta>
          <Card.Description>{person.description}</Card.Description>
        </Link>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          {/* <Button   basic color="green">
            Approve
          </Button> */}
          <EditModal person={person} handleEdit={handleEdit} />
          <Button onClick={() => handleDelete(person.id)} basic color="red">
            delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default CardExampleGroups;
