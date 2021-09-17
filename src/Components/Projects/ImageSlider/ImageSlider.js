import classes from './ImageSlider.module.css';
import { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';

const ImageSlider = (props) => {
    const [index, setIndex] = useState(0);
    const [imagese, setImages] = useState({});
    const indexRef = useRef(null);

    const resetTimer = () => {
        clearTimeout(indexRef.current);
    }

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item);});

        return images;
      }

    useEffect(() => {
        let imgs;
        if(isMobile)
        {
            switch(props.baseF){
                case 'BloodBank':
                    imgs = importAll(require.context(`../../../Assets/BloodBank/Mobile`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
                case 'PMS':
                     imgs = importAll(require.context(`../../../Assets/PMS/Mobile`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
                case 'AD':
                    imgs = importAll(require.context(`../../../Assets/AD/Mobile`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
                case 'FoodApp':
                    imgs = importAll(require.context(`../../../Assets/FoodApp/Mobile`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
            }
        }
        else{
            switch(props.baseF){
                case 'BloodBank':
                    imgs = importAll(require.context(`../../../Assets/BloodBank`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
                case 'PMS':
                     imgs = importAll(require.context(`../../../Assets/PMS`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
                case 'AD':
                    imgs = importAll(require.context(`../../../Assets/AD`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
                case 'FoodApp':
                    imgs = importAll(require.context(`../../../Assets/FoodApp`, false, /\.(png|PNG|jpe?g|svg)$/));
                    setImages(imgs);
                    break;
            }
        }
        return () => {
            
        }
        
    }, [props.baseF])


    useEffect(() => {
        resetTimer();
        indexRef.current = setTimeout(() => {
            setIndex((pState) => pState === props.projects - 1 ? 0 : pState + 1)
        }, props.delay)
        return () => {
            resetTimer();
        }
    }, [index, props.delay, props.projects])

    const handlePrevClick=()=>{
        setIndex((pState) => pState === 0 ? props.projects - 1 : pState - 1)
    }

    const handleNextClick=()=>{
        setIndex((pState) => pState === props.projects - 1 ? 0 : pState + 1)
    }
    return (
        <div className={classes.projectImg}>
            <div className={classes.slider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {Object.keys(imagese).map((inIt,i) => (
                    <img key={i} className={classes.slide} src={imagese[inIt].default} alt="Some Data"></img>
                ))}
            </div>
            <button className={classes.previousBtn} onClick={handlePrevClick}>&#10094;</button>
            <button className={classes.nextBtn} onClick={handleNextClick}>&#10095;</button>
        </div>
    )
}

export default ImageSlider;