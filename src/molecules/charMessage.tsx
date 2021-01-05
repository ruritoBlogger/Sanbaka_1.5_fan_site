import styles from './charMessage.module.scss';

import CharImage from '../atoms/image/charImage';
import Balloon from '../atoms/balloon';

interface Props{
  // 表示したい画像のパス
  path: string;
  // 吹き出しに挿入するメッセージ
  msg: string;
}

/**
 * 各キャラの画像と吹き出しを組み合わせたコンポーネント
 */
const CharMessage: React.VFC<Props> = ({path, msg}) => (
  <div className={styles.bl_charMessage}>
    <Balloon msg={msg} />
    <CharImage path={path} />
  </div>
);

export default CharMessage;
