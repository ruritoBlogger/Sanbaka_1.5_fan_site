import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import HistoryWindow from "../ecosystem/history/";
import Archive from "../molecules/archive";
import Header from "../organisms/header";

gsap.registerPlugin(ScrollTrigger);

const Road: React.VFC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  const windows = [
    {
      key: "history",
      content: <HistoryWindow isTop />,
    },
    {
      key: "1",
      content: (
        <Archive
          right={false}
          id="ZlpG8R_biw4"
          title="さんばかサーバー第一回"
          text="さんばかの初コラボ."
          day="2019/03/30"
          youtubeData={[
            { time: 44, key: "ZlpG8R_biw4" },
            { time: 25, key: "Wh2bMyxrXb0" },
            { time: 1, key: "pOXjuyKjD98" },
          ]}
        />
      ),
    },
    {
      key: "2",
      content: (
        <Archive
          right
          id="PcXH2IAXI_w"
          title="さんばかサーバー第二回"
          text="さんばかサーバーでの二回目のコラボ. "
          day="2019/04/09"
          youtubeData={[
            { time: 63, key: "y2TbN8WUmb4" },
            { time: 65, key: "PcXH2IAXI_w" },
            { time: 52, key: "MnDPwcFm8Ho" },
          ]}
        />
      ),
    },
    {
      key: "3",
      content: (
        <Archive
          right={false}
          id="RCEHT3VxkM4"
          title="にじさんじサーバー第一回"
          text="初めてのにじさんじサーバーでのコラボ."
          day="2019/05/04"
          youtubeData={[
            { time: 142, key: "66Sj7l3sLcM" },
            { time: 145, key: "t4nJkrU2-M0" },
            { time: 68, key: "RCEHT3VxkM4" },
          ]}
        />
      ),
    },
    {
      key: "4",
      content: (
        <Archive
          right
          id="UYvM47QCxZg"
          title="にじさんじサーバー第二回"
          text="にじさんじ鯖の観光の続き. "
          day="2019/05/19"
          youtubeData={[
            { time: 32, key: "UYvM47QCxZg" },
            { time: 40, key: "jB3JNinXYe0" },
            { time: 37, key: "lPW5D3uHFvI" },
          ]}
        />
      ),
    },
    {
      key: "5",
      content: (
        <Archive
          right={false}
          id="HWcemG6YO_U"
          title="にじさんじサーバー第三回"
          text="風雲さんばか城, 築城開始！"
          day="2019/06/10"
          youtubeData={[
            { time: 28, key: "AoPQ3D4NrlI" },
            { time: 30, key: "HWcemG6YO_U" },
            { time: 26, key: "9VkOIfGXrh4" },
          ]}
        />
      ),
    },
    {
      key: "6",
      content: (
        <Archive
          right
          id="kAxyrXTANYQ"
          title="にじさんじサーバー第四回"
          text="風雲さんばか城完成に向けて "
          day="2019/08/25"
          youtubeData={[
            { time: 92, key: "S7f5htYwawA" },
            { time: 80, key: "-Tsu0cLkEJg" },
            { time: 90, key: "kAxyrXTANYQ" },
          ]}
        />
      ),
    },
    {
      key: "7",
      content: (
        <Archive
          right={false}
          id="9r_1yLnqS-0"
          title="にじ鯖夏祭り"
          text="にじ鯖夏祭りにさんばかが参加."
          day="2020/08/22"
          youtubeData={[
            { time: 4, key: "9r_1yLnqS-0" },
            { time: 3, key: "BWcEKleNUV0" },
            { time: 55, key: "QM6QCi_fB0k" },
          ]}
        />
      ),
    },
  ];

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <Header />
      {windows.map(({ key, content }) => (
        <div key={key} ref={addToRefs}>
          {content}
        </div>
      ))}
    </>
  );
};

export default Road;
