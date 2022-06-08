import * as React from 'react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don&apos;t you think?</p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}
