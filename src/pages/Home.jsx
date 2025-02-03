import React, { useState } from 'react';
import { Link } from 'react-router';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogInOut = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onSearch={handleSearch} />
      <main>
      <section>
        <h2>Bienvenue sur notre site</h2>
        <p>
          Un site qui répertorie les super-héros, eux et leur histoire.
        </p>
        <p>
          C'est un projet d'exam. Bonjour Cédric !
        </p>
      </section>
      </main>
      <Footer backgroundColor="#333" />
    </>
  );
}