import React from 'react';
import spinner from './spinner.gif';

export default ()=> {
    return (
        <div>
            <img src={spinner} style={{width:'100px', margin:'40px auto',display:'block'}} alt="lyrics spinner"/>
        </div>
    )
};
