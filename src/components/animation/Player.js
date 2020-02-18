import React from "react";

 const Player = props => {
    return (
        <div style={{
            border: '6px double rgba(28,110,164,0.3)',
            borderRadius: 10,
            padding: 20,
            width: 250,
            height: 250,
            imageRendering: 'pixelated',
            backgroundImage: `url(${props.background})`,
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        }}
        > </div>
        )

};
export default Player;
