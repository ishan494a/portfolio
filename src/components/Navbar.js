import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar(){

  return (
    <div>
    <ul className={classes.ul}>
    <li className={classes.li}><Link to = '/contact' className='active'>Contact</Link></li>
    <li className={classes.li}><Link to = '/projects' className='active'>Projects</Link></li>
    <li className={classes.li}><Link to = '/skills' className='active'>Skills</Link></li>
    <li className={classes.li}><a href = 'https://www.linkedin.com/in/ishan-jain-5154ab217/?originalSubdomain=ca' className='active'>LinkedIn</a></li>
    <li className={classes.li}><Link to = '/about' className='active'>About</Link></li>
    <li className={classes.li}><Link to = '/portfolio' className='active'>Home</Link></li>
  </ul>
    </div>
  
  );
}
export default Navbar;