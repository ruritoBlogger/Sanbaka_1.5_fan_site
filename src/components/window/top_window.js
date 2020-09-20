import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  scroll: {
    "scroll-snap-align": "start",
    "height": "100vh",
    "background-color": "#EEE3C6",
  }
}));

const TopWindow = () => {
  const styles = useStyles();

  return (
    <>
      <section className={styles.scroll}>
        <p>さんばか1.5周年(非公式)ファンサイト</p>
      </section>
    </>
  );
};

export default TopWindow;

