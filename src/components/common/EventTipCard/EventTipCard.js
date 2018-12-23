import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react';

const EventTipCard = (props) => {
  return(
  <Card>
      <a href={props.section + props.index_number}>
        <Image fluid={true} src={props.src} alt={props.name}/>
      </a>
      <Card.Content>
        <Card.Meta>조회수: {props.hits}</Card.Meta>
        <Card.Meta>{props.date}</Card.Meta>
      </Card.Content>
  </Card>
)};

export default EventTipCard;