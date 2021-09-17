import classes from './projects.module.css';
import ImageSlider from './ImageSlider/ImageSlider';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Food App',
            des: 'Food odering app with custom theming',
            sourceUrl: 'https://github.com/geturjob/React-POC',
            activeUrl: 'https://poc-react-66849.web.app',
            count: 6,
            delay:2500,
            baseF:'FoodApp',
            hasSourceLinks:true,
            hasWebLinks:true,
            animation:'zoom-in'
        },
        {
            id: 2,
            title: 'Angular Dashboard',
            des: 'Angular Dashboard with animations',
            sourceUrl: 'https://github.com/geturjob/AlgoExpert-Sample-Dashborad',
            activeUrl: 'https://adash-11370.web.app',
            count: 7,
            delay:2500,
            baseF:'AD',
            hasSourceLinks:true,
            hasWebLinks:true,
            animation:'zoom-in'
        },
        {
            id: 3,
            title: 'BBMS',
            des: 'Blood bank management stytem using agular and .net',
            sourceUrl: '',
            activeUrl: '',
            count: 6,
            delay:2500,
            baseF:'BloodBank',
            hasSourceLinks:false,
            hasWebLinks:false,
            animation:'zoom-in'
        },
        {
            id: 4,
            title: 'PMS',
            des: 'Password and Daily stuff management System',
            sourceUrl: 'https://github.com/geturjob/PMSA',
            activeUrl: '',
            count: 7,
            delay:2500,
            baseF:'PMS',
            hasSourceLinks:true,
            hasWebLinks:false,
            animation:'zoom-in'
        },
        
    ]
    
    return (
        <div className={classes.projectcon} id="projects">
            <section className={classes.projectconsec}>
                <h1>projects</h1>
                {projects.map((item) => (
                    <div id={item.id} key={item.id}
                        data-aos={item.animation}
                        data-aos-duration="2000" className={classes.project}>
                        <div className={classes.projectIntro}>
                            <h3>{item.title}</h3>
                            <p>{item.des}</p>
                            <div className={classes.btn}>
                               {item.hasSourceLinks && <button className={classes.btn1}><a href={item.sourceUrl} rel="noreferrer noopener" target="_blank">Source Code</a></button>} 
                                {item.hasWebLinks && <button className={classes.btn2}><a href={item.activeUrl} rel="noreferrer noopener" target="_blank">Site Url</a></button>}
                            </div>
                        </div>
                        <section>
                            <ImageSlider projects={item.count} baseF={item.baseF} delay={item.delay}></ImageSlider>
                        </section>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Projects;