import React from 'react';

function Introduction({ setPage }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-fire text-center mb-4">Introduction</h1>
      <p className="text-lg mb-4">
      Welcome to the Fire. 
This is not a devotional for surface reading.
This is an invitation into the deep.
You are holding a 7-day encounter designed to pull back the veil on who the Father truly is. Not as religion has portrayed Him. Not as wounds have distorted Him. But as He has revealed Himself—in fullness.
Before time began, the Father longed for one thing: to dwell with you.
So He made Himself known:
•	TO you as Yahweh, the God who calls you chosen and beloved.
•	FOR you as Yeshua, the Lamb who took your place and shattered every chain.
•	WITH you as the Holy Spirit, the very breath of God living within your bones.
This is the divine pattern.
This is the fullness of the Father.
And you were made to live in it—not just visit it.
Over the next seven days, prepare to encounter Scripture not as a textbook, but as a living fire. Each entry will walk you deeper into revelation, each prayer a doorway, each journal space a sacred altar where truth meets transformation.
If you’ll lean in, surrender pride, silence distraction, and open your heart—
you won’t just read about the Father.
You’ll meet Him.
So, take a breath.
Lay down your assumptions.
And let the One who made you, died for you, and now lives in you, lead you.
This is the journey to the heart of God.
This is the completeness of the Father.
      </p>
      <button
        onClick={() => setPage('home')}
        className="mt-4 bg-fire text-parchment py-2 px-4 rounded hover:bg-red-800 transition"
      >
        Begin the Journey
      </button>
    </div>
  );
}

export default Introduction;