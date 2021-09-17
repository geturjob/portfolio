import classes from './intro.module.css';
import profilepic from '../../Assets/profilepic.jpg';

const Intro = () => {
    return (
        <div className={classes.container}>
            <div className={classes.greetingText}>
                <span data-aos="fade-right" data-aos-duration="2600">h</span>
                <span data-aos="zoom-in" data-aos-duration="1400">e</span>
                <span data-aos="zoom-in" data-aos-duration="1800">l</span>
                <span data-aos="zoom-in" data-aos-duration="2200">l</span>
                <span data-aos="fade-left" data-aos-duration="2600">o</span>
            </div>
            <div data-aos="fade-up" data-aos-duration="2600" className={classes.greetingMsg}>
                I am a front end web developer, who loves to code back end also.
            </div>
            {/* <div data-aos="fade-down" 
                 data-aos-duration="2000"
                 className={classes.introImgCon}>
                <div data-aos="fade-right"
                     data-aos-duration="2000"
                     className={classes.introSection}>
                    <h2>Somnath Singh</h2>
                    <p>
                        Hi Bryan, your fav messaging partner now lets you instantly engage with social media leads! Tap http://bit.ly/2nOFcRS to get started.
                        Hey Brandon, we’ve stocked our shelves with assorted mint cookie treats for you. Visit your local KookieU store. Hurry! This flavor is for a limited time only.
                    </p>
                </div>
                <img data-aos="fade-left"
                     data-aos-duration="2000"
                     src={profilepic} alt="profile pic" className={classes.imgSection}>
                </img>
            </div> */}
        </div>
    )
}

export default Intro;