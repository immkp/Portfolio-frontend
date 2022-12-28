import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './Navbar.scss'
import { images } from '../../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a className='app__navbar-links' href={'#home'}>
          <h1 className='head-text'>
            IM<span>MKP</span>
          </h1>
        </a>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact', 'resume'].map(
          (item) => (
            <li className='app__flex p-text' key={`link - ${item}`}>
              <div />
              {item !== 'resume' ? (
                <a href={`#${item}`}>{item}</a>
              ) : (
                <a href={images.resume} target='_blank' rel='noreferrer'>
                  {item}
                </a>
              )}
            </li>
          )
        )}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact', 'resume'].map(
                (item) => (
                  <li key={item}>
                    {item !== 'resume' ? (
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    ) : (
                      <a
                        href={images.resume}
                        onClick={() => setToggle(false)}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {item}
                      </a>
                    )}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
