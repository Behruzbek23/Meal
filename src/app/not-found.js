import React from 'react';

export const metadata = {
    title:{
    default: "not-found",   
    template: '%s | Ucell',
    },
    description: "Generated by create next app",
  };
const NotFound = () => {
    return (
        <div className=' pr-20' style={{ textAlign: 'center', marginTop: '50px', height :'32vw'  } }>
            <h1 className=' pt-30  text-6xl'>404</h1>
            <p className='text-6xl'>Page Not Found</p>
        </div>
    );
};

export default NotFound;
