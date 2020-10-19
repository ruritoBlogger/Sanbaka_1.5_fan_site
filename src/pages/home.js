import React, { useEffect, useRef }  from 'react';
import TopWindow from '../components/window/top/top_window';
import MemberWindow from '../components/window/member/member_window';
import HistoryWindow from '../components/window/history/history_window';
import Header from '../components/header'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isMobile } from 'react-device-detect';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  let scroll_size = 25;

  const windows = [
    {
      key: "top",
      content: <TopWindow />
    },
    {
      key: "member",
      content: <MemberWindow isRight={true} />
    },
    {
      key: "history",
      content: <HistoryWindow isTop={true} />
    }
  ]

  useEffect(() => {

    if( isMobile ) {
      scroll_size = 100;
    }

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
          start: `top center+=${scroll_size}`,
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
    </>
  )
};

export default Home;
