import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Signup from './components/Signup';
import Dedication from './components/Dedication';
import Introduction from './components/Introduction';
import Home from './components/Home';
import Day from './components/Day';
import devotionalData from './data/devotional';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('dedication');
  const [currentDay, setCurrentDay] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const renderPage = () => {
    if (!user) {
      return (
        <div>
          <Login setUser={setUser} />
          <Signup setUser={setUser} />
        </div>
      );
    }

    switch (currentPage) {
      case 'dedication':
        return <Dedication setPage={setCurrentPage} />;
      case 'introduction':
        return <Introduction setPage={setCurrentPage} />;
      case 'home':
        return <Home setDay={setCurrentDay} />;
      case 'day':
        return <Day dayData={devotionalData.find((d) => d.day === currentDay)} setDay={setCurrentDay} setPage={setCurrentPage} />;
      default:
        return <Dedication setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-parchment text-gray-800 font-serif">
      {renderPage()}
    </div>
  );
}

export default App;