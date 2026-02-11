import React from 'react';
import "./leftcol.css"
import Confirmbtn from './confirmbtn';
import Watchitem from './watchitem';
import Title from './title';
import Groupitem from './groupitem';

const Leftcol = () => {
    return ( 
        <>
            <Confirmbtn />

            <div className="watch">
                <Watchitem/>
                <Watchitem/>
                <Watchitem/>
                <Watchitem/>

            </div>

            <div className="groups">
                <Title />

                <div className="grouplist">
                    <Groupitem />
                    <Groupitem />
                    <Groupitem />
                    <Groupitem />
                    <Groupitem />
                    <Groupitem />
                </div>
            </div>


        </>
     );
}
 
export default Leftcol;