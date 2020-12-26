import classes from './Navbar.module.css';
const Navbar = () => {
   return (<nav className={classes.nav}>
      <div><a className={`${classes.item} ${classes.active}`} href='/profile'>Profile</a></div>
      <div><a className={classes.item} href='/dialogs'>Messages</a></div>
      <div><a className={classes.item} href='/news'>News</a></div>
      <div><a className={classes.item} href='/music'>Music</a></div>
      <div><a className={classes.item} href='/settings'>Settings</a></div>
   </nav>);
}
export default Navbar;