import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import { useState } from 'react';

export default App;

export function App() {
  const [user, setUser] = useState([
    {
      first_name: 'Juan',
      last_name: 'Serrano',
      username: 'juaniserrano',
      isFollowing: true,
    },
    {
      first_name: 'Linus',
      last_name: 'Olson',
      username: 'torvalds',
      verified: true,
    },
    {
      first_name: 'Microsoft',
      last_name: '',
      username: 'microsoft',
      verified: true,
    },
  ]);

  function getRandomUsername() {
    fetch('https://random-data-api.com/api/v2/users?size=6')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
    console.log(user);
  }
  return (
    <section className="App">
      <h1>Who to follow</h1>
      <TwitterFollowCard isFollowing userName={user[0].username} name={`${user[0].first_name} ${user[0].last_name}`} />
      <TwitterFollowCard isFollowing={false} userName={user[1].username} isVerified={user[1].verified} name={`${user[1].first_name} ${user[1].last_name}`} />
      <TwitterFollowCard isFollowing={false} userName={user[2].username} isVerified={user[2].verified} name={`${user[2].first_name} ${user[2].last_name}`} />
      {user[3] && <TwitterFollowCard isFollowing={false} userName={user[3].username} name={`${user[3].first_name} ${user[3].last_name}`} />}
      {user[4] && <TwitterFollowCard isFollowing={false} userName={user[4].username} name={`${user[4].first_name} ${user[4].last_name}`} />}
      {user[5] && <TwitterFollowCard isFollowing={false} userName={user[5].username} name={`${user[5].first_name} ${user[5].last_name}`} />}
      <button className="tw-buttonShowMore" onClick={getRandomUsername}>
        Show more
      </button>
    </section>
  );
}
