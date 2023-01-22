import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import { useState } from 'react';

export default App;

export function App() {
  const [users, setUser] = useState([
    {
      first_name: 'Juan',
      last_name: 'Serrano',
      username: 'juaniserrano',
      initalIsFollowing: true,
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
    console.log(users);
  }
  return (
    <section className="App">
      <h1>Who to follow</h1>
      {
        users.map(user => {
          const {username, first_name, last_name} = user

          return (
            <TwitterFollowCard userName={username} initalIsFollowing={false} name = {`${first_name} ${last_name}`}></TwitterFollowCard>
          )
        })
      }

      {/* <TwitterFollowCard initalIsFollowing={false} userName={users[0].username} name={`${users[0].first_name} ${users[0].last_name}`} />
      <TwitterFollowCard initalIsFollowing={false} userName={users[1].username} isVerified={users[1].verified} name={`${users[1].first_name} ${users[1].last_name}`} />
      <TwitterFollowCard initalIsFollowing={false} userName={users[2].username} isVerified={users[2].verified} name={`${users[2].first_name} ${users[2].last_name}`} />
      {users[3] && <TwitterFollowCard initalIsFollowing={false} userName={users[3].username} name={`${users[3].first_name} ${users[3].last_name}`} />}
      {users[4] && <TwitterFollowCard initalIsFollowing={false} userName={user[4].username} name={`${user[4].first_name} ${user[4].last_name}`} />}
      {user[5] && <TwitterFollowCard initalIsFollowing={false} userName={user[5].username} name={`${user[5].first_name} ${user[5].last_name}`} />} */}
      <button className="tw-buttonShowMore" onClick={getRandomUsername}>
        Show more
      </button>
    </section>
  );
}
