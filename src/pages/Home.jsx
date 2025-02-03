import React from "react";
import { Link } from "react-router";

export default function Home() {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <>
      <main>
        <section>
          <h2>Bienvenue sur notre site</h2>
          <p>
            Un site qui répertorie les super-héros, leur pouvoirs et leur
            histoire.
          </p>
          <p>C'est un projet d'exam. Bonjour Cédric !</p>
	  <Link to="/heroes">
            <button style={{ marginTop: '20px' }}>Voir les héros</button>
          </Link>
        </section>
      </main>
    </>
  );
}
