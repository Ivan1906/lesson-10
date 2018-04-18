import React from 'react';
import Card from '../../StyledComponents/Card';

const QuestionItem = ({ title, body, id }) => (
    <React.Fragment>
        <Card>
            <div>
                <h1>{title}</h1>
                <p>{bidy}</p>
            </div>
            <button>Edit</button>
            <div>{new Date(id).toString('dd/MM/YYYY')}</div>
        </Card>
    </React.Fragment>
);

export default QuestionItem;