import React from 'react';
import { useEffect, useState } from 'react';

import styles from './app.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import InfoBox from './components/InfoBox/InfoBox';
import Button from './components/BtnTheme/BtnTheme';
import { IUserData } from './commons/interfaces/IApp';
import { getData } from './commons/api/api'

export default function App() {
  const [light, setLight] = useState<boolean>(true);
  const [user, setUser] = useState<string>('');
  const [click, setClick] = useState<number>(0);
  const [userData, setUserData] = useState<IUserData>({
    data: null,
    userExist: true,
  });

  /** 
   * This function updates 'click' state value adding one on it 
   */
  const handleClick = (): void => {
    setClick(click + 1)
  }

  useEffect(() => {
    if (click === 0) return;
      getData(user)
      .then((res) => {
        if (!res.name) {
          getData('octocat')
            .then((res) => setUserData({ data: res, userExist: false }));
        }
        setUserData({ data: res, userExist: true });
      });
  }, [click]);


  useEffect(() => {
    getData('octocat')
    .then((res) => setUserData({ data: res, userExist: true }));
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.devfinder}>
          <header>
            <h2>devfinder</h2>
            <Button />
          </header>
          <SearchBar
            handleClickChange={handleClick}
            handleInputChange={setUser}
            inputChange={user}
            resultExist={userData?.userExist}
          />
          <InfoBox userData={userData?.data} />
        </div>
      </div>
  );
}
