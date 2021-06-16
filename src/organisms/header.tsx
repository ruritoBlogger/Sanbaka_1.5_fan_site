import Router from "next/router";
import Headroom from "react-headroom";
import HeaderButton from "../atoms/button/headerButton";
import styles from "./header.module.scss";
import Dialog from "./dialog";

const Header: React.VFC = () => {
  /**
   * メンバー紹介ページに遷移する
   */
  const MoveMemberPage = () => {
    window.scrollTo({ top: 0 });
    Router.push("/member");
  };

  /**
   * 1.5周年までの道のりページに遷移する
   */
  const MoveRoadPage = () => {
    window.scrollTo({ top: 0 });
    Router.push("/road");
  };

  /**
   * このサイトについてページに遷移する
   */
  const MoveSitePage = () => {
    window.scrollTo({ top: 0 });
    Router.push("/site");
  };

  /**
   * トップページに遷移する
   */
  const MoveHomePage = () => {
    window.scrollTo({ top: 0 });
    Router.push("/");
  };

  return (
    <div className={styles.root} id="scroll">
      <Headroom>
        <div className={`${styles.content} ${styles.pcOnly}`}>
          <HeaderButton handleClick={() => MoveHomePage()} msg="トップページ" />
          <HeaderButton
            handleClick={() => MoveMemberPage()}
            msg="さんばかとは"
          />
          <HeaderButton
            handleClick={() => MoveRoadPage()}
            msg="1.5周年までの道のり"
          />
          <HeaderButton
            handleClick={() => MoveSitePage()}
            msg="このサイトについて"
          />
        </div>
        <div className={`${styles.content} ${styles.smartphoneOnly}`}>
          <Dialog />
        </div>
      </Headroom>
    </div>
  );
};

export default Header;
