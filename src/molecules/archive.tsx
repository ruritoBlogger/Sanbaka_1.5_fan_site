import styles from './archive.module.scss';

import CharAnimationButton from '../atoms/button/charAnimationButton';
import LurchThumbnail from '../atoms/thubnail/lurchThumbnail';


interface Props {
  // 右側に説明文を置くかどうか
  right: boolean;
  // 表示したいサムネイルのyoutubeID
  id: string;
  // 説明部分のタイトル
  title: string;
  // 説明部分の内容
  text: string;
  // 投稿時間
  day: string;
  // 動画情報(youtubeのurlなど)[アンジュ・リゼ・戌亥]
  youtube_data: {time: number, key: string}[];
}

/**
 * アーカイブコンポーネント
 */
const Archive: React.VFC<Props> = ({right, id, title, text, day, youtube_data}) => {
  const flexStyle: string = right ? `${styles.archive} ${styles.archive_reverse}` : styles.archive;

  /**
   * 指定されたyoutubeの動画に遷移する
   */
  const MovePage = (data: {time: number, key: string}) => {
    window.open(`https://youtu.be/${data.key}?autoplay=0`, '_blank');
  };


  return (
    <div className={flexStyle}>
      <div className={styles.image_box}>
        <LurchThumbnail youtubeID={id} isSlantRight={right} />
      </div>
      <div className={styles.content_box}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={`${styles.text} ${styles.marginBottom}`}>{day}</p>
          <p className={styles.text}>{text}</p>
          <div className={`${styles.buttons} ${styles.flex_row} ${styles.marginTop}`}>
            <CharAnimationButton handleClick={() => MovePage(youtube_data[0])} msg="アンジュ視点" theme="ange" />
            <CharAnimationButton handleClick={() => MovePage(youtube_data[1])} msg="リゼ視点" theme="lize" />
            <CharAnimationButton handleClick={() => MovePage(youtube_data[2])} msg="戌亥視点" theme="inui" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
