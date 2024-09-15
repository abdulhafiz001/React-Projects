import React, { useState } from 'react';
// import './App.css';

const statesData = [
  { state: 'Abia', capital: 'Umuahia' },
  { state: 'Adamawa', capital: 'Yola' },
  { state: 'Akwa Ibom', capital: 'Uyo' },
  { state: 'Anambra', capital: 'Awka' },
  { state: 'Bauchi', capital: 'Bauchi' },
  { state: 'Bayelsa', capital: 'Yenagoa' },
  { state: 'Benue', capital: 'Makurdi' },
  { state: 'Borno', capital: 'Maiduguri' },
  { state: 'Cross River', capital: 'Calabar' },
  { state: 'Delta', capital: 'Asaba' },
  { state: 'Ebonyi', capital: 'Abakaliki' },
  { state: 'Edo', capital: 'Benin City' },
  { state: 'Ekiti', capital: 'Ado Ekiti' },
  { state: 'Enugu', capital: 'Enugu' },
  { state: 'Gombe', capital: 'Gombe' },
  { state: 'Imo', capital: 'Owerri' },
  { state: 'Jigawa', capital: 'Dutse' },
  { state: 'Kaduna', capital: 'Kaduna' },
  { state: 'Kano', capital: 'Kano' },
  { state: 'Katsina', capital: 'Katsina' },
  { state: 'Kebbi', capital: 'Birnin Kebbi' },
  { state: 'Kogi', capital: 'Lokoja' },
  { state: 'Kwara', capital: 'Ilorin' },
  { state: 'Lagos', capital: 'Ikeja' },
  { state: 'Nasarawa', capital: 'Lafia' },
  { state: 'Niger', capital: 'Minna' },
  { state: 'Ogun', capital: 'Abeokuta' },
  { state: 'Ondo', capital: 'Akure' },
  { state: 'Osun', capital: 'Oshogbo' },
  { state: 'Oyo', capital: 'Ibadan' },
  { state: 'Plateau', capital: 'Jos' },
  { state: 'Rivers', capital: 'Port Harcourt' },
  { state: 'Sokoto', capital: 'Sokoto' },
  { state: 'Taraba', capital: 'Jalingo' },
  { state: 'Yobe', capital: 'Damaturu' },
  { state: 'Zamfara', capital: 'Gusau' }
];

function Directory() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStates = statesData.filter(stateData =>
  stateData.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
  stateData.capital.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="container">
      <h1>Nigerian State Capitals Directory</h1>
      <input
        type="text"
        placeholder="Search for a state..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="state-table">
        <thead>
          <tr>
            <th>State</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {filteredStates.map((stateData, index) => (
            <tr key={index}>
              <td>{stateData.state}</td>
              <td>{stateData.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directory;
