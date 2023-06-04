import React from 'react';

interface CardProps{
    width?: string;
    height?: string;
    children: React.ReactNode;
}

function Card( props : CardProps) {
    return (
        <div style = {{backgroundColor: "lightblue", width: props.width, height: props.height, border: '5px solid black' }}>

            <h1>Welcome {props.height} {props.width}</h1>
            {props.children}

        </div>
    );
}
export default Card;