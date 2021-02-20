import React from 'react';
import Common from './Common';
import images from '../src/images/12.jpg';

const Home = () =>{

    return(
        <>
        <Common name="Grow your business with"
        imgsrc={images}
        visit="/service"
        btname="Get started"/>
        </>
    );
};

export default Home;