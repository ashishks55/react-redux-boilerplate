import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div id="fofmain">
      <div className="fof">
            <h1>Error 404</h1><br/>
            <Link to="/" className="button is-warning">Go Back</Link>
      </div>
    </div>
  )
}
