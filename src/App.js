import React, { useState } from 'react';

function ShadyOn() {
  const [mode, setMode] = useState('off');

  const toggleMode = () => {
    setMode(mode === 'off' ? 'on' : 'off');
  };

  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: mode === 'on' ? '#000' : '#fff',
      color: mode === 'on' ? '#0f0' : '#000',
      minHeight: '100vh',
      paddingTop: '50px',
      transition: 'all 0.5s ease',
    }}>
      <h1>Shady ON</h1>
      <p>
        {mode === 'on' ? 'L’esprit Slim Shady est activé !' : 'L’esprit Slim Shady est désactivé.'}
      </p>
      <button
        onClick={toggleMode}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: mode === 'on' ? '#0f0' : '#000',
          color: mode === 'on' ? '#000' : '#0f0',
          border: 'none',
          borderRadius: '5px',
          transition: 'all 0.3s ease',
        }}
      >
        {mode === 'off' ? 'Allume Slim Shady' : 'Éteins Slim Shady'}
      </button>
    </div>
  );
}

export default ShadyOn;
          
