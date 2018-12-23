import React from 'react';
import { Card } from 'semantic-ui-react';
import EventTipCard from '../../../common/EventTipCard/EventTipCard';
import axios from 'axios';

import 'semantic-ui-css';
import styles from '../../../common/CommonCSS/CommonCSS.css';

export class Events extends React.Component {
    state = {
        events: [],
    }

    componentDidMount() {
        axios.post("http://13.125.89.0/chemical/event.php")
            .then(res => {
                const events = res;
                this.setState({ events: events.data });
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    render () {
        return(
            <div className={'container'}>
                <div className="tip-heading">
                    <h4>{this.props.category}</h4>
                </div>
                <div className={styles.rightDiv}>
                    <div className="row">
                        <Card.Group itemsPerRow={2} stackable={true}>
                        { 
                            this.state.events.map((event, index) =>
                            <EventTipCard 
                                payload={event}
                                key={index}
                                section={'event/'}
                                index_number={event.index_number}
                                src={"http://13.125.89.0/chemical/event_tip_thumbnail/" + event.thumbnail}
                                name={event.content}
                                date={event.dateTime}
                                hits={event.hit}

                            />)
                        }      
                        </Card.Group>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}