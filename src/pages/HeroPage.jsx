import React from 'react';
import ApiFetch from '../API/ApiFetch';

const HeroPage = () => {
  const apiUrl = '/api/6040baa1745f59a38b297b484d754313'; // Utilisez le chemin relatif

  return (
    <div>
      <h1>Hero Information</h1>
      <ApiFetch
        url={apiUrl}
        render={(data) => (
          <div>
            {data.results.map((hero) => (
              <div key={hero.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                <h2>{hero.name}</h2>
                <img src={hero.image.url} alt={hero.name} style={{ width: '100px', height: '100px' }} />
                <p><strong>Power:</strong> {Object.entries(hero.powerstats).map(([key, value]) => (
                  <span key={key}>{key}: {value} </span>
                ))}</p>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default HeroPage;