import styles from './balloon.module.scss';

interface Props {
  // 吹き出しに挿入する文字
  msg: string;
}

/**
 * 吹き出しを表示するコンポーネント
 */
const Balloon: React.VFC<Props> = ({msg}) => (
  <div className={styles.balloon}>
    <p className={styles.char_msg}>{msg}</p>
  </div>
);

export default Balloon;
