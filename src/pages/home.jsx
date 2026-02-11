import React from 'react';
import Navbar from '../components/navbar';
import "./home.css"
import Leftcol from '../components/leftcol';
import Imagecards from '../components/imagecards';
import Post from '../components/post';
import Feed from '../components/feed';
import Requests from '../components/requests';
import Title from '../components/title';
import Streams from '../components/streams';

const Home = () => {
    return ( 
        <>
        <Navbar />
        <div className="body">

        <div className="col1">
            <Leftcol />
        </div>

        <div className="middlecol">
            <Imagecards />
            <Post />
            <Feed />
            <Feed />
            <Feed />

        </div>

        <div className="rightcol">
            <Requests />
            <div className="streamstab">
                <Title />
                <div className="streams">
                    <Streams />
                    <Streams />
                    <Streams />
                    <Streams />
                    <Streams />
                    <Streams />
                </div>

            </div>
        </div>
        
        </div>
        </>

     );
}
 
export default Home;