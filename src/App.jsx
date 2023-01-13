import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
  return (
    <section className="App">
      <h1>Suggested for you</h1>
      <TwitterFollowCard isFollowing userName="juaniserrano" name="Juan Serrano" />
      <TwitterFollowCard isFollowing={false} userName="alanracciatti" name="Chin Racciatti" />
      <TwitterFollowCard isFollowing={false} userName="torvalds" name="Linus Torvalds" />
      <TwitterFollowCard isFollowing={false} userName="microsoft" name="Microsoft" />
    </section>
  );
}
