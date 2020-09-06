import React from 'react';

const Picture = (props) => {
    const { img, code } = props.picture;
    const imgStyle = {
        width: '200px', height: '200px', borderRadius: '50%', margin: '20px'
    }
    return (
        <div>
            <div>
                <img style={imgStyle} src={img} alt="" />
            </div>
        </div>
    );
};

export default Picture;