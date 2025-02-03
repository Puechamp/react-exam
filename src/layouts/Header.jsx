import React from 'react';
import { useAuth } from '../auth/LogInOut';
import SearchBar from '../components/SearchBar';

const Header = ({ onSearch }) => {
  const { user, login, logout } = useAuth();

  console.log('Header: user', user); // Ajoutez ce journal pour vérifier l'état de `user`

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333' }}>
      <div>
        {user ? (
          <>
            <SearchBar onSearch={onSearch} />
            <button onClick={logout} style={{ marginLeft: '10px' }}>Déconnexion</button>
          </>
        ) : (
          <button onClick={() => login('admin', '1234')}>Connexion</button>
        )}
      </div>
    </header>
  );
};

export default Header;