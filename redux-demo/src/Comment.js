import React from 'react';

const Comment = ({id, text, votes, thumbUp, thumbDown}) => (
    <li>
        {text} <span>votes: {votes}</span>
        <button onClick={() => thumbUp(id)}>Up vote!</button>
        <button onClick={() => thumbDown(id)}>Down vote!</button>
    </li>
);

export default Comment;