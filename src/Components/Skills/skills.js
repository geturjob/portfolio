import classes from './skills.module.css';
import { useEffect, useState } from 'react';

const Skills = (props) => {
    const [imagese, setImages] = useState();
    const skills = [
        {
            name: 'React Redux',
            animation: 'zoom-in',
            duration: '1200',
            level: '70%',
            imageUrl: 'angular.png'
        },
        {
            name: 'Angular 2+',
            animation: 'zoom-in',
            duration: '1200',
            level: '62%',
            imageUrl: 'angular.png'
        },
        {
            name: 'JavaScript',
            animation: 'zoom-in',
            duration: '1200',
            level: '60%',
            imageUrl: 'angular.png'
        },
        {
            name: 'HTML/CSS',
            animation: 'zoom-in',
            duration: '1200',
            level: '70%',
            imageUrl: 'angular.png'
        },
        {
            name: 'TypeScript',
            animation: 'zoom-in',
            duration: '1200',
            level: '60%',
            imageUrl: 'angular.png'
        },
        {
            name: 'C#',
            animation: 'zoom-in',
            duration: '1200',
            level: '50%',
            imageUrl: 'angular.png'
        },
        {
            name: 'NPM',
            animation: 'zoom-in',
            duration: '1200',
            level: '40%',
            imageUrl: 'angular.png'
        }
    ]

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    useEffect(() => {
        let imgs = importAll(require.context(`../../Assets/SkillImages`, false, /\.(png|PNG|jpe?g|svg)$/));

        Object.keys(imgs).map((item, index) => {
            skills[index].imageUrl = imgs[item].default;
        })
        setImages(skills);
    }, [])

    return (
        <section className={classes.skillscon}>
            <h1>skills</h1>
            <div className={classes.skillscon1}>
                {imagese != undefined && imagese.map((item) => (
                    <div key={item.name} className={classes.skillscon2}>
                        <div data-aos={item.animation}
                            data-aos-duration={item.duration}
                            className={classes.skillDiv}
                            style={{ backgroundImage: `url(${item.imageUrl})` }}>
                        </div>
                        <div className={classes.levelCon}>
                            <p>{item.name}</p>
                            <div className={classes.levelIndicator}>
                                <div style={{ width: `${item.level}` }} className={classes.innerLevel}>{item.level}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;