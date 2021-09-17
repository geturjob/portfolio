import classes from './footer.module.css';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();
    return (
        <section className={classes.footer}>
            <div className={classes.icondiv}>
                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/somnath1998/">
                    <i className="fa fa-linkedin-square" title="LinkedIn" style={{ fontSize: "36px", color: "#8b8989" }}></i>
                </a>
            </div>
            <div className={classes.icondiv}>
                <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/_ssomnath/">
                    <i className="fa fa-instagram" title="_ssomnath" style={{ fontSize: "36px", color: "#8b8989" }}></i>
                </a>
            </div>
            <div className={classes.icondiv} onClick={() => {
                history.push('/contact');
            }}>
                <i className="fa fa-envelope" title="Lets Connect" style={{ fontSize: "36px", color: "#8b8989" }}></i>
            </div>

            <div className={`${classes.upArraow} ${classes.icondiv}`}>
                <a href="#home">
                    <i className="fa fa-arrow-up" title="Go Up" style={{ fontSize: "36px", color: "#8b8989" }}></i>
                </a>
            </div>
        </section>
    )
}

export default Footer;