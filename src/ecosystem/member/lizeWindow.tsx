import IconButton from "../../atoms/button/iconButton";
import CharMessage from "../../molecules/charMessage";
import styles from "../window_layout.module.scss";

/**
 * リゼの紹介ページ
 */
const LizeWindow: React.FC = () => (
  <div className={`${styles.ly_center} ${styles.color_lize}`}>
    {/* FIXME: こんなCSSの重ねがけ...あんまりだよ... */}
    <div
      className={`${styles.bl_window_small} ${styles.flex_row_reverse} ${styles.flex_column_onlySmartphone}`}
    >
      <CharMessage msg="あんでだよぉーー！！" path="/image/lize.png" />
      <div className={styles.paddingRight_pcOnly}>
        <h3 className={styles.bl_window_subtitle}>
          文武両道人望ゲキアツプリンセス
        </h3>
        <h2 className={styles.bl_window_title}>リゼ・ヘルエスタ</h2>
        <p className={styles.bl_window_content}>
          ヘルエスタ王国の第二皇女.
          <br />
          文武両道学園主席
          <br />
          真面目で誰にでも優しくかなりの人望がある.
          <br />
          王位継承の資格者として
          <br />
          日々鍛錬や人とのコミュニケーションを大事にしている.
        </p>
        <div className={`${styles.flex_row} ${styles.centerComponent}`}>
          <IconButton
            imgLink="/image/youtube.png"
            url="https://www.youtube.com/channel/UCZ1xuCK1kNmn5RzPYIZop3w?sub_confirmation=1"
          />
          <IconButton
            imgLink="/image/twitter.png"
            url="https://twitter.com/Lize_Helesta"
          />
        </div>
      </div>
    </div>
  </div>
);

export default LizeWindow;
