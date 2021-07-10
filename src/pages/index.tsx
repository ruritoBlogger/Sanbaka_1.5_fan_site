import TopWindow from "../ecosystem/top/topWindow";
import MemberWindow from "../ecosystem/member/memberWindow";
import HistoryWindow from "../ecosystem/history/";
import Header from "../organisms/header";
import styles from "./index.module.scss";

const Home: React.FC = () => {
  const windows = [
    {
      key: "top",
      content: <TopWindow />,
    },
    {
      key: "member",
      content: <MemberWindow isRight />,
    },
    {
      key: "history",
      content: <HistoryWindow isTop />,
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.inner}>
        {windows.map(({ key, content }) => (
          <div key={key}>{content}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
