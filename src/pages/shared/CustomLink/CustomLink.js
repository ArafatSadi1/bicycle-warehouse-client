import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className='mt-1'>
        <Link
        className='px-3'
          style={{ color: match? '#FFC107' : 'white', textDecoration: match ? "underline" : "none", fontSize: '17px'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
export default CustomLink;