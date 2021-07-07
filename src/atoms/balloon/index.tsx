import styles from './index.module.scss';

interface Props {
  msg: string;
}

/**
 * 吹き出しを表示するコンポーネント
 * @param {string} msg: 吹き出しに挿入する文字
 */
const Balloon: React.FC<Props> = ({ msg }) => (
  <div className={styles.balloon}>
    <p className={styles.char_msg}>{msg}</p>
  </div>
);

export default Balloon;
