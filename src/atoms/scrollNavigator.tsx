import styles from './scrollNavigator.module.scss';

interface Props{
  // スクロールを促すメッセージ
  msg: string;
  // pcのみで表示させるかどうか
  isOnlyPC: boolean;
}

/**
 * スクロールを促すUIのコンポーネント
 */
const ScrollNavigator: React.VFC<Props> = ({ msg, isOnlyPC }) => {
  const style = isOnlyPC ? styles.scroll_pcOnly : styles.scroll;

  return (
    <a className={style} href="#">{msg}</a>
  );
};

export default ScrollNavigator;
