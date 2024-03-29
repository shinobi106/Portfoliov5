import React from 'react'
import PortfolioList from '../portfolioList/portfolioList'
import "./portfolio.scss"
import { useState } from 'react';

export default function Portfolio() {

  const[select, setselect] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
 

  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item =>(
          <PortfolioList title = {item.title} active={select === item.id} setselect = {setselect}
            id = {item.id}
          />
        ))}
      </ul>
      <div className='container'>
         <div className='item'>
             <img src='assets/web.png' alt=''/>
             <h3>Daily Blog</h3>
         </div>
        
         <div className='item'>
             <img src='assets/port.png' alt=''/>
             <h3>Portfolio v4</h3>
         </div>
         <div className='item'>
             <img src='assets/newsletter.png' alt=''/>
             <h3>News Letter</h3>
         </div>
         <div className='item'>
             <img src='assets/simon.png' alt=''/>
             <h3>Simon Game</h3>
         </div>
         <div className='item'>
             <img src='assets/todo.png' alt=''/>
             <h3>Todo List</h3>
         </div>
         
      </div>
    </div>
  )
}
