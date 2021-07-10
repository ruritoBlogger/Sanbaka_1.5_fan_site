import TopWindow from "../ecosystem/top/topWindow";
import MemberWindow from "../ecosystem/member/";
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
      content: <MemberWindow isTop={false} />,
    },
    {
      key: "history",
      content: <HistoryWindow isTop={false} />,
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

export default Home;
