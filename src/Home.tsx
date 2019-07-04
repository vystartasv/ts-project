import React from 'react';

export const Home: React.FC = () => {
    const text = 'This is a text, and the number is: ';
    const num = 1234567890;
    return (<>
        <div>this is just plain text inside div</div>
        {text}{num}
        </>)
}
