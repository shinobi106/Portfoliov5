
import './topbar.scss'
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuOpen, setmenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
           <div className='left'>
            <a href='#intro' className='logo'>fightClub..</a>
            <div className='itemContainer'>
            <EmailIcon className='icon'/>
            <span>arnavt65@gmail.com</span>

            </div>
           </div>
           
           <div className='right'>
               <div className='hamburger' onClick={() => setmenuOpen(!menuOpen)}>
                   <span className='line1'></span>
                   <span className='line2'></span>
                   <span className='line3'></span>
               </div>
           </div>
      </div>
    </div>
  )
}
