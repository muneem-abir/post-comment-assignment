import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    const { id, title, body } = props.post;
    const boxStyle = {
        padding: '15px',
        margin: '20px'
    }
    const borderBo = {
        borderBottom: '2px solid green'
    }
    return (
        <div style={{ width: '1000px', margin: 'auto' }}>
            <Box border={2} borderRadius="borderRadius" borderColor="primary.main" style={boxStyle}>
                <h5><span style={borderBo}>Post no :</span>  {id}</h5>
                <h3><span style={borderBo}>Post title :</span> {title}</h3>
                <p><span style={borderBo}>Post body :</span> {body}</p>
                <Link to={`/posts/${id}`}>
                    <Button variant="contained" color="primary">View Post</Button>
                </Link>
            </Box>
        </div>
    );
};

export default Posts;