import React from 'react'
import './test.scss'

export default function test() {

  const data = [
    {
      id: '1',
      logo: 'assets/reactlogo.png.png',
      desc: 'As a React developer, I will use my expertise in JavaScript and React to build engaging and interactive user interfaces. My problem-solving skills and attention to detail will be key to creating high-quality web applications.',
      name: 'React.js',
      level: '⭐⭐⭐'
    },
    {
      id: '2',
      logo: 'assets/frontend.png',
      desc: 'As a front-end web developer, I will use my skills in HTML, CSS, and JavaScript to build the user-facing components of a website or web application.',
      name: 'Front End Stack',
      level: '⭐⭐⭐⭐',
      featured: 'true'
    },
    // {
    //   id: '3',
    //   logo: 'assets/reactlogo.png.png',
    //   desc: ' I will use Node.js to create fast and scalable web servers, APIs, and real-time applications.',
    //   name: 'Node.js',
    //   level: '⭐⭐⭐⭐'
    // },
    {
      id: '4',
      logo: 'assets/flutter.png',
      desc: 'I will use my skills in Dart programming to build mobile applications that work seamlessly across multiple platforms, including Android, iOS, and web.',
      name: 'Flutter',
      level: '⭐⭐⭐'
    },
    {
      id: '5',
      logo: 'assets/leetcode.png',
      desc: '1528 contest rating on LeetCode with 650+ questions solved in DSA. Have a good understanding of Data Structures and Problem Solving Skils,',
      name: 'Competitive Programming',
      level: '⭐⭐⭐⭐'
    },
    

  ]
  return (
    <div className='test' id='test'>
      <h1>Sharp skills, endless potential.</h1>
      <div className='container'>
         {data.map(d => (

         <div className={d.featured ? "card featured": " card"}>
            <div className='top'>
              {/* <img src='assets/right-arrow.png' className='left' alt='none' /> */}
              <img src={d.logo} className='user'/>
              {/* <img src='assets/globe.png' className='right' alt='none'/> */}
            </div>
            <div className='center'>{d.desc}
             </div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.level}</h4>
            </div>
         </div>))}
      </div> 
    </div>
  )
}
