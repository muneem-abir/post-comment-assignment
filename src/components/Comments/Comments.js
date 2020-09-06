import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import fakePicture from '../../fakeData/fakePicture.js';
import Picture from '../Picture/Picture';


const Comments = (props) => {
    const { postId, name, email, body } = props.comment;
    const boxStyle = {
        padding: '15px',
        margin: '20px',
        display: 'flex', justifyContent: 'center'
    }
    const borderBo = {
        borderBottom: '2px solid green'
    }
    const [pictures, setPictures] = useState(fakePicture);
    return (
        <div>
            <Box border={1} borderRight={0} borderLeft={0} borderColor="grey.500" style={boxStyle}>
                <div style={{ width: '250px', height: '250px' }}>
                    {
                        pictures.map(picture => <Picture key={picture.code} picture={picture}></Picture>)
                    }
                </div>
                <div style={{ width: '500px' }}>
                    <h3><span style={borderBo}>Comment under post no :</span> {postId}</h3>
                    <h4> <span style={borderBo}>Name :</span> {name}</h4>
                    <h5><span style={borderBo}>His/Her Email :</span> {email}</h5>
                    <p><span style={borderBo}>Comment :</span> {body}</p>
                </div>


            </Box>
        </div>
    );
};

export default Comments;