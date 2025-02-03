import React from 'react';
import LogInOut from '../auth/LogInOut';
import SearchBar from '../components/SearchBar';

const Header = ({ isLoggedIn, onSearch }) => {
  return (
    <header>
      <h1>My Application</h1>
      {isLoggedIn ? (
        <>
          <button onClick={LogInOut}>Déconnexion</button>
          <SearchBar onSearch={onSearch} />
        </>
      ) : (
        <button onClick={LogInOut}>Connexion</button>
      )}
    </header>
  );
};

export default Header;