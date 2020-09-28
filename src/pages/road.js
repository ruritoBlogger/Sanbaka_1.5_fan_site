import React, { useEffect, useRef }  from 'react';
import HistoryWindow from '../components/window/history/history_window';
import Archive from '../components/parts/archive';
import Header from '../components/header'
import Footer from '../components/footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Road = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);

  const windows = [
    {
      key: "history",
      content: <HistoryWindow />
    },
    {
      key: "1",
      content: <Archive
                  data="pOXjuyKjD98"
                  title="初コラボ！"
                  text="さんばかの初コラボ. さんばか鯖でわいわいマインクラフトを楽しむ姿が観られます"
                  times={[44, 25, 1]} />
    },
    {
      key: "2",
      content: <Archive right={true} />
    },
    {
      key: "3",
      content: <Archive />
    },
    {
      key: "4",
      content: <Archive right={true} />
    }
  ]

  useEffect(() => {

    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {

      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=200',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  return (
    <>
      <Header />
      {
        windows.map(({key, content}) => (
          <div key={key} ref={addToRefs}>
            {content}
          </div>
        ))
      }
      <Footer />
    </>
  )
};

export default Road;
