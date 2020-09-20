import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  scroll: {
    "scroll-snap-align": "start",
    "height": "100vh"
  }
}));

const MemberWindow = () => {
  const styles = useStyles();

  return (
    <>
      <section className={styles.scroll}>
        <p>メンバー紹介</p>
      </section>
    </>
  );
};

export default MemberWindow;