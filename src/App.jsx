import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Time from './components/Time/Time';
import Gallery from './components/Gallery/Gallery';
import Gift from './components/Gift/Gift';
import Rsvp from './components/Rsvp/Rsvp';
import Footer from './components/Footer/Footer';
import Countdown from './components/Countdown/Countdown';
import Story from './components/Story/Story';
function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleShowInvitation = () => {
    setShowInvitation(true);
  };

  return (
    <Router>
      <Routes>
        {/* Rute utama tanpa parameter */}
        <Route path="/" element={<Navigate to="/Tamu" replace />} />

        {/* Rute dengan parameter nama tamu */}
        <Route
          path="/:guestName"
          element={
            !showInvitation ? (
              <Hero onShowInvitation={handleShowInvitation} />
            ) : (
              <>
                <Home />
                <Header />
                <Time />
                <Countdown />
                <Gallery />
                <Story />
                <Gift />
                <Rsvp />
                <Footer />
              </>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
