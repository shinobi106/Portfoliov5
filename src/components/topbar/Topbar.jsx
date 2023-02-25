
import './topbar.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Topbar({menuOpen, setmenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
           <div className='left'>
            <a href='#intro' className='logo'>fightClub..</a>
            <div className='itemContainer'>
            <PersonOutlineIcon className='icon'/>
            <span>9627593053</span>

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
