import MemberWindow from "../ecosystem/member/";
import AngeWindow from "../ecosystem/member/angeWindow";
import LizeWindow from "../ecosystem/member/lizeWindow";
import InuiWindow from "../ecosystem/member/inuiWindow";
import Header from "../organisms/header";
import styles from "./member.module.scss";

const Member: React.FC = () => {
  const windows = [
    {
      key: "member",
      content: <MemberWindow isTop={true} />,
    },
    {
      key: "ange",
      content: <AngeWindow />,
    },
    {
      key: "lize",
      content: <LizeWindow />,
    },
    {
      key: "inui",
      content: <InuiWindow />,
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.inner}>
        {windows.map(({ key, content }) => (
          <div key={key} className={styles.content}>
            {content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Member;
