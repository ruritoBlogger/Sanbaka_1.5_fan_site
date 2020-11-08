import React from 'react';
import styles from './charMessage.module.scss';

import CharImage from '../atoms/image/charImage';
import Balloon from '../atoms/balloon';

/**
 * 各キャラの画像と吹き出しを組み合わせたコンポーネント
 * @param {string} props.path 表示したい画像のパス
 * @param {string} props.msg 吹き出しに挿入するメッセージ
 */

const CharMessage = (props) => (
  <>
    <div className={styles.bl_charMessage}>
      <Balloon msg={props.msg} />
      <CharImage path={props.path} />
    </div>
  </>
);

export default CharMessage;
