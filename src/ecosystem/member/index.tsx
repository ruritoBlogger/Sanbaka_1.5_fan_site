import Router from "next/router";

import AnimationButton from "../../atoms/button/animationButton";
import ScrollNavigator from "../../atoms/scrollNavigator";
import MainImage from "../../atoms/image/mainImage";
import styles from "./index.module.scss";

interface Props {
  isTop: boolean;
}

/**
 * メンバー紹介ページ
 * ページの一番上で表示するかどうかで内容が変わる
 * @param {boolean} isTop: ページの一番上に表示するか否か
 */
const MemberWindow: React.FC<Props> = ({ isTop }) => {
  const MoveMemberPage = () => {
    window.scrollTo({ top: 0 });
    Router.push("/member");
  };

  return (
    <div className={styles.inner}>
      <div className={styles.image_block}>
        <MainImage path="/image/sanbaka.png" />
      </div>
      <div className={styles.text_block}>
        <div>
          <h2 className={styles.title}>さんばかとは</h2>
          <p className={styles.content}>
            サンバカーニバルの略であり,
            <br /> 以下の３人によって結成されたユニット.
          </p>
          <div className={styles.char_content_wrapper}>
            <p className={styles.ange_content}>アンジュ・カトリーナ</p>
            <p className={styles.lize_content}>リゼ・ヘルエスタ</p>
            <p className={styles.inui_content}>戌亥とこ</p>
          </div>
        </div>
        {(() => {
          if (!isTop) {
            return (
              <div className={styles.button_wrapper}>
                <AnimationButton
                  handleClick={() => MoveMemberPage()}
                  msg="もっと詳しく"
                />
              </div>
            );
          } else return null;
        })()}
      </div>
      {(() => {
        if (isTop) {
          return (
            <div className={styles.scroll_wrapper}>
              <ScrollNavigator msg="Scroll" isOnlyPC={false} />
            </div>
          );
        } else return null;
      })()}
    </div>
  );
};

export default MemberWindow;
