import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MemberWindow from '../ecosystem/member/memberWindow';
import AngeWindow from '../ecosystem/member/angeWindow';
import LizeWindow from '../ecosystem/member/lizeWindow';
import InuiWindow from '../ecosystem/member/inuiWindow';
import Header from '../organisms/header';

gsap.registerPlugin(ScrollTrigger);

const Member: React.VFC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLDivElement[]>([]);

  const windows = [
    {
      key: 'member',
      content: <MemberWindow isRight={false} />,
    },
    {
      key: 'ange',
      content: <AngeWindow />,
    },
    {
      key: 'lize',
      content: <LizeWindow />,
    },
    {
      key: 'inui',
      content: <InuiWindow />,
    },
  ];

  useEffect(() => {
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
          start: 'top center+=50',
          toggleActions: 'play none none reverse',
        },
      });
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

export default Member;
