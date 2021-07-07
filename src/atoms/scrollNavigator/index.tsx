import styles from './index.module.scss';

interface Props{
  msg: string;
  isOnlyPC: boolean;
}

/**
 * スクロールを促すUIのコンポーネント
 * @param {string} msg: スクロールを促すメッセージ
 * @param {boolean} isOnlyPC: pcのみで表示させるかどうか
 */
const ScrollNavigator: React.FC<Props> = ({ msg, isOnlyPC }) => {
  const style = isOnlyPC ? styles.scroll_pcOnly : styles.scroll;

  return (
    <p className={style}>{msg}</p>
  );
};

export default ScrollNavigator;
