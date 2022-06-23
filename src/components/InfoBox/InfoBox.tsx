import React from 'react';

import styles from './infoBox.module.css';
import { IData } from '../../commons/interfaces/IApp'
import IconMaps from '../../assets/icons/icon-maps.svg';
import IconLink from '../../assets/icons/icon-link.svg';
import IconTwitter from '../../assets/icons/icon-twitter.svg';
import IconCompany from '../../assets/icons/icon-company.svg';


interface IInfoBox {
  userData: IData | null ;
}

interface IImgAvatar {
  imgUrl: string | undefined;
}

interface IStatistics {
  bio: string | undefined
  public_repos: number | undefined
  followers: number | undefined
  following: number | undefined
}

interface IContactInfo {
  location: string | undefined
  twitterUserName: string | undefined
  blog: string | undefined
  company: string | undefined
}

const ImgAvatar: React.FC<IImgAvatar> = ({ imgUrl }) => {
  return (
    <div className={styles['avatar-container']}>
      { imgUrl && <img src={imgUrl} /> }
    </div>
  );
};

const ProfileData: React.FC<IStatistics> = ({
  bio,
  public_repos, 
  followers, 
  following
}) => {
  return (
  <div className={styles['right-middle']}>
    <div className={styles['right-middle__description']}>
      <p>{bio ? bio : "This profile has no Bio."}</p>      
    </div>
    <div className={styles['right-middle__statistics']}>
      <div>
        <h3>Repos</h3>
        <p>{public_repos}</p>
      </div>
      <div>
        <h3>Followers</h3>
        <p>{followers}</p>
      </div>
      <div>
        <h3>Following</h3>
        <p>{following}</p>
      </div>
    </div>
    </div>
  )
}

const ContactInfo: React.FC<IContactInfo> = ({
  location, 
  twitterUserName,
  blog,
  company
}) => {
  return (
    <div className={styles['right-bottom']}>
      <div>
        <img src={IconMaps} />
        <p>{location ? location : "Not Avaiable"}</p>
      </div>  
      <div>
        <img src={IconTwitter} />
        <p>{twitterUserName ? twitterUserName : "Not Avaiable"}</p>
      </div>  
      <div>
        <img src={IconLink} /> 
        <p>{blog ? blog : "Not Avaiable"}</p>
      </div>  
      <div>
        <img src={IconCompany} />
        <p>{company ? company : "Not Avaiable"}</p>
      </div>  
    </div>
  )
}

const InfoBox: React.FC<IInfoBox> = ({ userData }) => {
  return (
    <section className={styles['info-box']}>
      <div className={styles['info-box__left']}>
        <ImgAvatar imgUrl={userData?.avatar_url} />
      </div>
      <div className={styles['info-box__right']}>
        {/* right-top section*/}
        <div className={styles['right-top']}>
          <div style={{display: 'none'}}>
            <ImgAvatar imgUrl={userData?.avatar_url} />
          </div>
          <div className={styles['right-top__data']}>
            <div className={styles.data__left}>
              <h2>{userData?.name}</h2>
              <p>{`@${userData?.login}`}</p>
            </div>
            <div className={styles.data__right}>
              <p>Joined 23 june 2022</p>
            </div>
          </div>
        </div>
        <ProfileData 
          bio={userData?.bio}
          public_repos={userData?.public_repos} 
          followers={userData?.followers}
          following={userData?.following}
        />
        <ContactInfo 
          location={userData?.location}
          twitterUserName={userData?.twitter_username}
          company={userData?.company}
          blog={userData?.blog}
        /> 
      </div>
    </section>
  );
};

export default InfoBox;