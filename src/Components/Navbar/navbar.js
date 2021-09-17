import classes from './navbar.module.css';
import { useHistory } from 'react-router-dom';

const NavBar =()=>{
    const history = useHistory();

    return(
        <section className={classes.navbar} id="home">
            <h3 onClick={()=>{
                history.push('/')
            }}><a href="#projects">projects</a></h3>
            <h3 onClick={()=>{
                history.push('/')
            }}>Somnath Singh</h3>
            <h3 onClick={()=>{
                history.push('/contact')
            }}>contact</h3>
        </section>
    )
}

export default NavBar;