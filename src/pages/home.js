import React from 'react';
import TopWindow from '../components/window/top_window';
import MemberWindow from '../components/window/member_window';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  scroll: {
    "overflow": "auto",
    "scroll-snap-type": "y mandatory",
    "height": "100vh"
  }
}));

const Home = () => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.scroll}>
        <TopWindow />
        <MemberWindow />
        <p>Home page</p>
      </div>
    </>
  )
};

export default Home;
