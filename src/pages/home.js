import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from 'react-device-detect';
import TopWindow from '../components/ecosystem/top/topWindow';
import MemberWindow from '../components/ecosystem/member/memberWindow';
import HistoryWindow from '../components/ecosystem/history/historyWindow';
import Header from '../components/header';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  let scrollSize = 20;

  const windows = [
    {
      key: 'top',
      content: <TopWindow />,
    },
    {
      key: 'member',
      content: <MemberWindow isRight />,
    },
    {
      key: 'history',
      content: <HistoryWindow isTop />,
    },
  ];

  useEffect(() => {
    if (isMobile) {
      scrollSize = 100;
    }

    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        autoAlpha: 0,
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: `top center+=${scrollSize}`,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <Header />
      {
        windows.map(({ key, content }) => (
          <div key={key} ref={addToRefs}>
            {content}
          </div>
        ))
      }
    </>
  );
};

export default Home;
