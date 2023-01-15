import verifiedLogo from './assets/verified.svg';

export function TwitterFollowCard({ userName, name, isFollowing, isVerified, isFollowingBack }) {
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
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  );
}
