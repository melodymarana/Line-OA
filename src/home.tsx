import * as React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <p>Fuck that work</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
