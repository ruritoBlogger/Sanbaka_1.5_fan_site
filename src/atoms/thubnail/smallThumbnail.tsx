import { YouTube } from '@material-ui/icons';
import React from 'react';
import styles from './smallThumbnail.module.scss';

interface Props {
  // 表示したい画像のyoutubeID
  youtubeID: string;
}

// TODO: pc版の画面サイズによってはUIが崩れるので修正する

/**
 * youtubeのサムネイルを小さく表示するコンポーネント
 */
const SmallThumbnail: React.VFC<Props> = youtubeID => (
  <div className={styles.frame}>
    <img className={styles.image} src={`https://i.ytimg.com/vi/${youtubeID}/hqdefault.jpg`} />
  </div>
);

export default SmallThumbnail;
