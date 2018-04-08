import React from 'react';

const Comment = ({id, text, votes, thumbUp, thumbDown, removeComment}) => (
    <li>
        {text} <span>votes: {votes}</span>
        <button onClick={() => thumbUp(id)}>Up vote!</button>
        <button onClick={() => thumbDown(id)}>Down vote!</button>
        <button onClick={() => removeComment(id)}>Delete</button>
    </li>
);

export default Comment;