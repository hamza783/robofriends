import React, {Fragment} from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <Fragment>
            {
                robots.map((robot, index) => {
                    return <Card key={index} id={robot.id} name={robot.name} email={robot.email}/>
                })
            }
        </Fragment>
    );
}

export default CardList;