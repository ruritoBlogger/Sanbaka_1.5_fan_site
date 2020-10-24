import React, { useEffect, useRef } from 'react';
import MemberWindow from '../components/ecosystem/member/member_window';
import AngeWindow from '../components/ecosystem/member/ange_window';
import LizeWindow from '../components/ecosystem/member/lize_window';
import InuiWindow from '../components/ecosystem/member/inui_window';
import Header from '../components/header'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Member = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);

  const windows = [
    {
      key: "member",
      content: <MemberWindow />
    },
    {
      key: "ange",
      content: <AngeWindow />
    },
    {
      key: "lize",
      content: <LizeWindow />
    },
    {
      key: "inui",
      content: <InuiWindow />
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
          start: 'top center+=50',
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
  );
};

export default Member;

