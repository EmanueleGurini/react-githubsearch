import React from "react";
import { useEffect, useContext } from "react";

import styles from "./infoBox.module.css";
import { IData } from "../../commons/interfaces/IApp";
import IconMaps from "../../assets/icons/icon-maps.svg";
import IconLink from "../../assets/icons/icon-link.svg";
import IconTwitter from "../../assets/icons/icon-twitter.svg";
import IconCompany from "../../assets/icons/icon-company.svg";
import { ThemeContext } from "../../commons/context/context";

interface IInfoBox {
  userData: IData | null;
}

interface IImgAvatar {
  imgUrl: string | undefined;
}

interface IStatistics {
  bio: string | undefined;
  public_repos: number | undefined;
  followers: number | undefined;
  following: number | undefined;
}

interface IContactInfo {
  location: string | undefined;
  twitterUserName: string | undefined;
  blog: string | undefined;
  company: string | undefined;
}

const ImgAvatar: React.FC<IImgAvatar> = ({ imgUrl }) => {
  return (
    <div className={styles["avatar-container"]}>
      {imgUrl && <img src={imgUrl} />}
    </div>
  );
};

const ProfileData: React.FC<IStatistics> = ({
  bio,
  public_repos,
  followers,
  following,
}) => {
  const { light } = useContext(ThemeContext);
  let theme: string = light ? "light" : "dark";

  return (
    <div className={`${styles["user-secondary-info"]}`}>
      <div className={styles["user-secondary-info__description"]}>
        <p className={styles[`user-secondary-info__bio--${theme}`]}>
          {bio ? bio : "This profile has no Bio."}
        </p>
      </div>
      <div
        className={`${styles["user-secondary-info__statistics"]} ${
          styles[`user-secondary-info__statistics--${theme}`]
        }`}
      >
        <div>
          <h4>Repos</h4>
          <h2>{public_repos}</h2>
        </div>
        <div>
          <h4>Followers</h4>
          <h2>{followers}</h2>
        </div>
        <div>
          <h4>Following</h4>
          <h2>{following}</h2>
        </div>
      </div>
    </div>
  );
};

const ContactInfo: React.FC<IContactInfo> = ({
  location,
  twitterUserName,
  blog,
  company,
}) => {
  const { light } = useContext(ThemeContext);
  let theme: string = light ? "light" : "dark";

  return (
    <div className={styles["contact-info"]}>
      <div>
        <img src={IconMaps} />
        <p className={`${styles[`contact-info-${theme}`]}`}>
          {location ? location : "Not Avaiable"}
        </p>
      </div>
      <div>
        <img src={IconTwitter} />
        <p className={`${styles[`contact-info-${theme}`]}`}>
          {twitterUserName ? twitterUserName : "Not Avaiable"}
        </p>
      </div>
      <div>
        <img src={IconLink} />
        <p className={`${styles[`contact-info-${theme}`]}`}>
          {blog ? blog : "Not Avaiable"}
        </p>
      </div>
      <div>
        <img src={IconCompany} />
        <p className={`${styles[`contact-info-${theme}`]}`}>
          {company ? company : "Not Avaiable"}
        </p>
      </div>
    </div>
  );
};

const InfoBox: React.FC<IInfoBox> = ({ userData }) => {
  const { light } = useContext(ThemeContext);
  let theme: string = light ? "light" : "dark";

  return (
    <section className={`${styles["info-box"]} ${styles[`infobox-${theme}`]}`}>
      {/* infobox-left section*/}
      <div className={styles["info-box__left"]}>
        <ImgAvatar imgUrl={userData?.avatar_url} />
      </div>

      {/* infobox-right section*/}
      <div className={styles["info-box__right"]}>
        <div className={styles["user-primary-info"]}>
          <div className={styles["user-primary-info__avatar"]}>
            <ImgAvatar imgUrl={userData?.avatar_url} />
          </div>
          <div className={styles["user-primary-info__data"]}>
            <div className={styles["user-primary-info__left"]}>
              <h2 className={styles[`user-primary-info__name--${theme}`]}>
                {userData?.name}
              </h2>
              <p>{`@${userData?.login}`}</p>
            </div>
            <div className={styles["user-primary-info__right"]}>
              <p className={styles[`user-primary-info__created--${theme}`]}>
                Joined 23 june 2022
              </p>
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
