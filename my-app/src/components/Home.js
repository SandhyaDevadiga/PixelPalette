import React from 'react';
import './Home.css'; // Assuming you have basic styling

const Home = () => {
  const recentSubmissions = [
    { id: 1, title: 'Urban Shadows', author: 'Alice', imgUrl: '/images/shadow1.jpg' },
    { id: 2, title: 'Reflections', author: 'Bob', imgUrl: '/images/reflection.jpg' },
    { id: 3, title: 'City Life', author: 'Charlie', imgUrl: '/images/urban1.jpg' }
  ];

  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <h1>Welcome to the Monthly Photo Challenge</h1>
        <p>This month's theme: <strong>Shadows</strong></p>
        <button className="join-button">Join Challenge</button>
      </div>

      {/* Recent Submissions Section */}
      <div className="recent-submissions">
        <h2>Recent Submissions</h2>
        <div className="photo-grid">
          {recentSubmissions.map((photo) => (
            <div className="photo-card" key={photo.id}>
              <img src={photo.imgUrl} alt={photo.title} className="photo" />
              <h3>{photo.title}</h3>
              <p>By {photo.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
