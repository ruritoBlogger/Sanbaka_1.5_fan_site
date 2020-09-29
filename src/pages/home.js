import React, { useEffect, useRef }  from 'react';
import TopWindow from '../components/window/top/top_window';
import MemberWindow from '../components/window/member/member_window';
import HistoryWindow from '../components/window/history/history_window';
import Header from '../components/header'
import Footer from '../components/footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);

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
          start: 'top center+=100',
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

export default Home;
