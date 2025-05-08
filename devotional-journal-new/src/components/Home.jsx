import devotionalData from '../data/devotional';

function Home({ setDay }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-fire text-center mb-4">
        Understanding the Completeness of The Father
      </h1>
      <h2 className="text-2xl text-center mb-6">
        A 7-Day Devotional Journey to the Heart of God
      </h2>
      <p className="text-lg mb-4">
        Welcome to a 7-day journey beyond religion and into revelation. Through
        scripture, prayer, and deep reflection, encounter the Father as He
        revealed Himself: as Yahweh, who chose you; as Yeshua, who died for
        you; as Holy Spirit, who dwells within you.
      </p>
      <p className="text-lg mb-6 italic">
        Don’t just know about God: Come know the Father.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {devotionalData.map((day) => (
          <button
            key={day.day}
            onClick={() => setDay(day.day)}
            className="bg-fire text-parchment py-2 px-4 rounded hover:bg-red-800 transition"
          >
            Day {day.day}: {day.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;