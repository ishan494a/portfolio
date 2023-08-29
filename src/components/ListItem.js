import { Link } from 'react-router-dom';
import classes from './ListItem.module.css';
function ListItem(props){
  return (
  <div className={classes.carditem}>
    <div className={classes.projecttitle}>{props.title}</div>
    <div className={classes.description}>{props.description}</div>
    <div><a href={props.link}>Click to view GitHub Repository</a></div>
  </div>

  );
}

export default ListItem;