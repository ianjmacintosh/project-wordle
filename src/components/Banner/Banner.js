import React from 'react';

function Banner({ className, children }) {
  return (<div className={`${className} banner`}>
    {children}
  </div>);
}

export default Banner;
