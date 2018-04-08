import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) => (
    <div>
        <input type='text' id='new' placeholder='Nowy komentarz' /><input type='submit' onClick={() => addComment(document.querySelector("#new").value)} />
        <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    </div>
 )



export default CommentsList;