import React from 'react';

function Dedication({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src="/images/front_cover_art.png" alt="Book Cover" className="w-full mb-6 rounded shadow-lg border-2 border-fire" />
      <h1 className="text-4xl font-bold text-fire text-center mb-4">Dedication</h1>
      <p className="text-lg mb-4">
      To the One who is and was and is to come—
ABBA, Yeshua, Holy Spirit—
this book is for You.
You are the fire in my lungs,
the voice in my spirit, 
the breath behind every word.
To every soul yearning to know the Father—not in concept, but in communion—
this is for you too.
You were not made to survive on fragments.
You were made for fullness.
May this devotional ignite in you the burning revelation
that the Father did not leave you incomplete.
He came to you.
He died for you.
He lives in you.
And He’s calling you home.

      </p>
      <button
        onClick={() => setPage('introduction')}
        className="mt-4 bg-fire text-parchment py-2 px-4 rounded hover:bg-red-800 transition"
      >
        Proceed to Introduction
      </button>
    </div>
  );
}

export default Dedication;