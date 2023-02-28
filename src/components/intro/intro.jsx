import React, { useEffect, useRef } from 'react'
import './intro.scss'

import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor:false,
      strings:["Developer", "Software Engineer", "Designer"],

    });

  },[]);
  return (
    <div className='intro' id='intro'>
       <div className='left'>
        <div className='imageContainer'>
          <img src='assets/iphone6.png' alt='myphoto'></img>
        </div>
       </div>
       <div className='right'>
        <div className='wrapper'>
                  <h2>Hey! I'm</h2>
                  <h1>Arnav Tyagi</h1>
                  <h3>a <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'><img src='assets/down.png' alt='nothing'></img></a>
       </div>
    
    </div>
  )
}
