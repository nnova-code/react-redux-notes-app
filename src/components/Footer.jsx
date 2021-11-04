import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '120px',
        textAlign: 'center',
        lineHeight: '60px',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div class='container'>
        <span class='text-muted'>
          'A Simple Notes App' by Elise.
          <br />
          Copyright ⓒ {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
