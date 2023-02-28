import React from 'react'
import './work.scss'
import { useState } from 'react'

export default function Work() {
  const [curslider, setcurslider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/smartphone.png",
      title: "Portfolio v5",
      desc: "A portfolio website made using HTML, CSS and Bootsrap v5",
      img: "./assets/port.png"
    },
    {
      id: "2",
      icon: "./assets/smartphone.png",
      title: "Notes App",
      desc: "Notes App built using React.js",
      img: "./assets/notes.png"
    },
    {
      id: "3",
      icon: "./assets/smartphone.png",
      title: "Blog Website",
      desc: "A Daily Blog built using EJS templates and Express.js",
      img: "./assets/web.png"
    },

  ];
  const handleClick = (way) =>{
    way === "left" ? setcurslider(curslider > 0 ? curslider-1 : 2) : 
    setcurslider(curslider < data.length -1 ? curslider+1 : 0)
  };

  return (
    <div className='work' id='work'>
      <div className='slider' 
      style={{transform: `translateX(-${curslider *100}vw)`}} >
        {data.map(d => (

        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftcontainer'>
                <div className='imgcontainer'>
                  <img src={d.icon} alt='none' />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img src={d.img} />
            </div>
          </div>
          </div>))}
      </div>
      <img src='assets/right-arrow.png' className='arrow left' alt='none' onClick={()=>handleClick("left")}/>
      <img src='assets/right-arrow.png' className='arrow right' alt='none' onClick={()=>handleClick("right")}/>
    </div>
  )
}
