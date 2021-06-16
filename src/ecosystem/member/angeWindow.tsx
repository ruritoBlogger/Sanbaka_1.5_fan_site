import IconButton from '../../atoms/button/iconButton';
import CharMessage from '../../molecules/charMessage';
import styles from '../window_layout.module.scss';

/**
 * アンジュの紹介ページ
 */
const AngeWindow: React.VFC = () => {
  /**
   * アンジュのyoutubeチャンネルに遷移する
   */
  const MoveToYoutube = () => {
    window.open('https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw', '_blank');
  };

  /**
   * アンジュのTwitterページに遷移する
   */
  const MoveToTwitter = () => {
    window.open('https://twitter.com/ange_katrina_', '_blank');
  };

  return (
    <div className={`${styles.ly_center} ${styles.color_ange}`}>
      <div className={`${styles.bl_window_small} ${styles.flex_column_onlySmartphone}`}>
        <CharMessage msg="おまたせ、待った？" path="/image/ange.png" />
        <div className={styles.paddingLeft_pcOnly}>
          <h3 className={`${styles.bl_window_subtitle}`}>公式美少女錬金術師ライバー</h3>
          <h2 className={`${styles.bl_window_title}`}>アンジュ・カトリーナ</h2>
          <p className={`${styles.bl_window_content}`}>
            ボロボロの小屋で時間を忘れて
            <br />
            錬金術の研究に明け暮れている.
            <br />
            大人っぽい女性的な体に憧れており
            <br />
            実はその研究をしているとかしていないとか.
          </p>
          <div className={`${styles.flex_row} ${styles.centerComponent}`}>
            <IconButton handleClick={() => MoveToYoutube()} link={`${window.location.origin}/image/youtube.png`} />
            <IconButton handleClick={() => MoveToTwitter()} link={`${window.location.origin}/image/twitter.png`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngeWindow;
