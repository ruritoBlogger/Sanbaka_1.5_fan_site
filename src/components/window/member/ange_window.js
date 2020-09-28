import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '../../parts/icon_button';
import styles from '../window_layout.module.scss';

const AngeWindow = () => {
  const history = useHistory();

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  const MoveToYoutube = () => {
    window.open("https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw", "_blank")
  }

  const MoveToTwitter = () => {
    window.open("https://twitter.com/ange_katrina_", "_blank")
  }

  return (
    <>
      <div className={`${styles.root} ${styles.color_ange}`}>
        <div className={styles.main} >
          <h3 className={`${styles.subtitle} ${styles.right}`}>公式美少女錬金術師ライバー</h3>
          <h2 className={`${styles.title} ${styles.right}`}>アンジュ・カトリーナ</h2>
          <p className={`${styles.content} ${styles.right}`}>
            ボロボロの小屋で時間を忘れて<br/>錬金術の研究に明け暮れている.<br/>
            大人っぽい女性的な体に憧れており<br/>実はその研究をしているとかしていないとか.
          </p>
          <div className={`${styles.flex_row} ${styles.right_component} ${styles.margin_top}`}>
            <IconButton handleClick={() => MoveToYoutube()} link={`${window.location.origin}/image/youtube.png`} />
            <IconButton handleClick={() => MoveToTwitter()} link={`${window.location.origin}/image/twitter.png`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AngeWindow;