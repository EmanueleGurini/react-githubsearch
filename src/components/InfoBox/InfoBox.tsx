import React from 'react';
import styles from './infoBox.module.css';

interface IInfoBox {
  userData: any;
}

interface IImgAvatar {
  imgUrl: string;
}

const ImgAvatar: React.FC<IImgAvatar> = ({ imgUrl }) => {
  return (
    <div className={styles['avatar-container']}>
      <img src={imgUrl} />
    </div>
  );
};

const InfoBox: React.FC<IInfoBox> = ({ userData }) => {
  return (
    <section className={styles['info-box']}>
      <div className={styles['info-box__left']}>
        <ImgAvatar imgUrl={userData?.avatar_url} />
      </div>
      <div className={styles['info-box__right']}>
        <div className={styles.top}></div>
        {/* top */}
        {/* middle */}
        {/* bottom */}
      </div>
    </section>
  );
};

export default InfoBox;