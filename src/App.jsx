import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import { AuthProvider } from './auth/LogInOut';
import AppRouter from './routes/Router';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './App.css';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <AuthProvider>
      <Router>
        <Header onSearch={handleSearch} />
        <AppRouter />
        <Footer backgroundColor="#333" />
      </Router>
    </AuthProvider>
  );
}

export default App;