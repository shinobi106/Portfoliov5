import {useState} from 'react';
import "./contact.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Contact() {
  
  const [msg, setmsg] = useState(false);


  function submit(e){
    e.preventDefault();
    setmsg(true);
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/handshake.png' alt=''/>
      </div>
      <div className='right'>
        <h2>Connect..</h2>
        <form onSubmit={submit}>

          <input type="text" placeholder='"Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Submit</button>
          <h3 className='reply'>{msg && "I'll reach out to you ASAP"}</h3>
          
        </form>
        <div className='socials'>
          <a href='https://github.com/shinobi106'><GitHubIcon /></a>
          <a href='https://leetcode.com/shinobi69/'><CodeIcon /></a>
          <a href='https://www.linkedin.com/in/arnav-tyagi-b6867b226/'><LinkedInIcon /></a>
          <a href='https://twitter.com/arnavvtyagi'><TwitterIcon /></a>
          </div>
          <p className='footer'>© Arnav Tyagi 2023</p>
      </div>
    </div>
  )
}
