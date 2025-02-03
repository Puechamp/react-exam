import React from 'react';

const Footer = ({ backgroundColor }) => {
  const footerStyle = {
    backgroundColor: backgroundColor || '#000', // Couleur par défaut noire
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 My Application. All rights reserved.</p>
    </footer>
  );
};

export default Footer;