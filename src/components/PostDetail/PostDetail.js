import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Comments from '../Comments/Comments';
import { Button } from '@material-ui/core';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);


    const [comments, setComments] = useState([]);
    useEffect(() => {
        const urlComment = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(urlComment)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    const boxStyle = {
        padding: '15px',
        margin: '20px'
    }
    const borderBo = {
        borderBottom: '2px solid green'
    }
    const homeStyle = {
        background: '#ddd', padding: '20px',
        display: 'flex', justifyContent: 'end'
    }

    return (
        <div>
            <div style={homeStyle}>
                <Link to={`/all-posts`}><Button variant="contained" color="secondary">Back to Home</Button></Link>
            </div>
            <div style={{ width: '1000px', margin: 'auto' }}>
                <h1>Post detail of post no : {postId}</h1>
                <Box border={2} borderRadius="borderRadius" borderColor="primary.main" style={boxStyle}>
                    <h3><span style={borderBo}>Post title :</span> {post.title}</h3>
                    <p><span style={borderBo}>Post body :</span>  {post.body}</p>
                </Box>
            </div>
            <hr /><hr />
            <div style={{ width: '1000px', margin: 'auto' }}>
                <h2>All comments : {comments.length}</h2>
                {
                    comments.map(comment => <Comments comment={comment} key={comment.id}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetail;