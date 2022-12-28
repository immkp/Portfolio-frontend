import React from 'react'
import {BsTwitter , BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'
import { images } from '../constants';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          style={{ textDecoration: 'none' }}
          href='https://twitter.com/iam_MKpanigrahi'
          target='_blank'
          rel='noopener'
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          style={{ textDecoration: 'none' }}
          href='https://github.com/immkp'
          target='_blank'
          rel='noopener'
        >
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          style={{ textDecoration: 'none' }}
          href='https://leetcode.com/immkp/'
          target='_blank'
          rel='noopener'
        >
          <img src={images.leetcode} alt='logo' />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia