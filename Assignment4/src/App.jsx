import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      name: "Tanveer Singh",
      imageUrl: "https://ui-avatars.com/api/?name=Tanveer+Singh&background=0D8ABC&color=fff&size=150",
      description: "MCA student interested in machine learning and web development."
    },
    {
      id: 2,
      name: "Vipul Prasad",
      imageUrl: "https://ui-avatars.com/api/?name=Vipul+Prasad&background=28a745&color=fff&size=150",
      description: "Full-stack developer who loves building React apps."
    },
    {
      id: 3,
      name: "Yadnyesh Sawant",
      imageUrl: "https://ui-avatars.com/api/?name=Yadnyesh+Sawant&background=6f42c1&color=fff&size=150",
      description: "Backend developer working with Java and databases."
    }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <h1>Assignment 4: React Profile Card</h1>
        <p className="subtitle">Using Props to Pass Name, Image URL, and Description</p>
      </header>

      <main className="cards-container">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            imageUrl={user.imageUrl}
            description={user.description}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
