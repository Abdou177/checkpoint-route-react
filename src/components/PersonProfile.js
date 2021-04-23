import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = (props) => {
  const personFound = props.persons.find(
    (person) => person.id == props.match.params.personId
  );
  return (
    <Card>
      {console.log(personFound)}
      <Link to="/persons">
        {" "}
        <Button>return to persons list </Button>{" "}
      </Link>
      <Image src={personFound.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{personFound.name}</Card.Header>
        <Card.Meta>
          <span className="date">{personFound.status}</span>
        </Card.Meta>
        <Card.Description>{personFound.Description} </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        22 Friends
      </Card.Content>
    </Card>
  );
};

export default CardExampleCard;
