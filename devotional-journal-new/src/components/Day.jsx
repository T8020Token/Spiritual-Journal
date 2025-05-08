import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Day({ dayData, setDay, setPage, user }) {
  const [journal, setJournal] = useState('');

  useEffect(() => {
    const fetchJournal = async () => {
      if (user) {
        const journalRef = doc(db, 'journals', `${user.uid}_day${dayData.day}`);
        const journalSnap = await getDoc(journalRef);
        if (journalSnap.exists()) {
          setJournal(journalSnap.data().text);
        }
      }
    };
    fetchJournal();
  }, [dayData.day, user]);

  const handleJournalChange = async (e) => {
    const text = e.target.value;
    setJournal(text);
    if (user) {
      const journalRef = doc(db, 'journals', `${user.uid}_day${dayData.day}`);
      await setDoc(journalRef, { text });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => setPage('home')}
        className="mb-4 text-fire hover:underline"
      >
        ← Back to Home
      </button>
      <h2 className="text-3xl font-bold text-fire mb-4">
        Day {dayData.day}: {dayData.title}
      </h2>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Scripture Focus</h3>
        <ul className="list-disc pl-5">
          {dayData.scripture.map((verse, index) => (
            <li key={index} className="mb-2">{verse}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Devotional</h3>
        <p className="text-justify">{dayData.devotional}</p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Reflection Questions</h3>
        <ul className="list-disc pl-5">
          {dayData.reflection.map((question, index) => (
            <li key={index} className="mb-2">{question}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Prayer</h3>
        <p className="italic">{dayData.prayer}</p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Journal Prompt</h3>
        <p className="mb-4">{dayData.journalPrompt}</p>
        <textarea
          value={journal}
          onChange={handleJournalChange}
          className="w-full p-4 border border-gray-300 rounded h-48"
          placeholder="Write your journal entry here..."
        />
      </section>
    </div>
  );
}

export default Day;