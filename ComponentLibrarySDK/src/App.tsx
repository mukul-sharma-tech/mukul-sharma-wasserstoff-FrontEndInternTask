import React, { useState } from 'react';
import { RegistrationPage, ConfirmationPage } from './pages';
import { Ticket } from './lib/types';

function App() {
  const [ticket, setTicket] = useState<Ticket | null>(null);

  const handleRegistrationComplete = (generatedTicket: Ticket) => {
    setTicket(generatedTicket);
  };

  const handleRestart = () => {
    setTicket(null);
  };

  return (
    <div className="app">
      {ticket ? (
        <ConfirmationPage 
          ticket={ticket} 
          onRestart={handleRestart} 
        />
      ) : (
        <RegistrationPage 
          onComplete={handleRegistrationComplete} 
        />
      )}
    </div>
  );
}

export default App;