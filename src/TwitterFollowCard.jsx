import { useState } from 'react';
import verifiedLogo from './assets/verified.svg';

export function TwitterFollowCard({ userName, name, isVerified = false, isFollowingBack, initalIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initalIsFollowing);
  const textFollow = isFollowing ? 'Following' : 'Follow';
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
          <span className='tw-followCard-text'>{textFollow}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  );
}
