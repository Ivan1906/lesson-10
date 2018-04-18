import React from 'react';
import QuestionItem from '../QuestionItem/Component';

const QuestionList = ({ questions }) => (
    <div>
        {questions.map(quetion => 
            <QuestionItem key={quetion.id} {...quetion}/>
        )}
    </div>
);