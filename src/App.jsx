import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import { useState } from 'react';

export default App;

export function App() {
  const [user, setUser] = useState('');

  function getRandomUsername() {
    fetch('https://random-data-api.com/api/v2/users?size=3')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }
  return (
    <section className="App">
      <h1>Who to follow</h1>
      <TwitterFollowCard isFollowing userName="juaniserrano" name="Juan Serrano" />
      <TwitterFollowCard isFollowing={false} userName="torvalds" isVerified name="Linus Torvalds" />
      <TwitterFollowCard isFollowing={false} userName="microsoft" isVerified name="Microsoft" />

      {user && <TwitterFollowCard isFollowing={false} userName={user[0].username} name={`${user[0].first_name} ${user[0].last_name}`} />}
      {user && <TwitterFollowCard isFollowing={false} userName={user[1].username} name={`${user[1].first_name} ${user[1].last_name}`} />}
      {user && <TwitterFollowCard isFollowing={false} userName={user[2].username} name={`${user[2].first_name} ${user[2].last_name}`} />}
      <button className="tw-buttonShowMore" onClick={getRandomUsername}>
        Show more
      </button>
    </section>
  );
}
