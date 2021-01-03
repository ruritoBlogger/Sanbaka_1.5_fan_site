import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './site.module.scss';
import Header from '../organisms/header';
import Footer from '../organisms/footer';

gsap.registerPlugin(ScrollTrigger);

const Site: React.VFC = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);

  const windows = [
    {
      key: 'key',
      content:
  <div className={styles.root}>
    <div className={styles.block}>
      <h3 className={styles.subtitle}>使用させていただいたサイト</h3>
      <p className={styles.content}>
        配信情報など:
        <a className={styles.link} href="https://wikiwiki.jp/nijisanji/">にじさんじ非公式wiki</a>
      </p>
      <p className={styles.content}>
        立ち絵:
        <a className={styles.link} href="https://nijisanji.ichikara.co.jp/member/">にじさんじ公式サイト</a>
      </p>
      <p className={styles.content}>
        イメージカラー:
        <a className={styles.link} href="https://www.itsukaralink.jp/livers">いつから.link</a>
      </p>
    </div>
  </div>,
    },
    {
      key: 'thank',
      content:
  <div className={styles.root}>
    <div className={styles.block}>
      <h3 className={styles.subtitle}>サイト制作者より</h3>
      <p className={styles.content}>
        本サイトにアクセスしていただきありがとうございます.
        <br />
        本サイトから少しでもさんばかの魅力が伝わると嬉しいです.
      </p>
    </div>
  </div>,
    },
    {
      key: 'test',
      content:
  <div>
    <div className={styles.root}>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>最後に</h3>
        <p className={styles.content}>
          今回1.5周年を迎えましたさんばかの３人の
          <br />
          今後のご活躍を応援しています.
          <br />
          <br />
        </p>
      </div>
    </div>
    <Footer />
  </div>,
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
          start: 'top center+=200',
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

export default Site;
