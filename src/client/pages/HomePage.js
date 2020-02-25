import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Homeward bound</div>
            <button onClick={ () => console.log('hello world') }>click on me</button>
        </div>
    )
};

export default { 
    component: Home
};
