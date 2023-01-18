import { useState } from 'react';
import verifiedLogo from './assets/verified.svg';

export function TwitterFollowCard({ userName = 'unknown', name, isVerified = false, isFollowingBack }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const textFollow = isFollowing ? 'Following' : 'Follow';
  //TODO: make a component that handdle the entire button: should have onMouseEnter and onMouseLeave when isFollowing
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="juaniserrano profile avatar" />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <div className="tw-followCard-userVerified">
            <span className="tw-followCard-infoUserName">@{userName}</span>
            <img className={isVerified ? 'tw-followCard-verified' : 'tw-displayNone'} src={verifiedLogo} alt="" />
          </div>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {textFollow}
        </button>
      </aside>
    </article>
  );
}
