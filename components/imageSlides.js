
import { ImagesD } from "./data/images";
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Captions } from "./data/captions";

export default function ImageSlider({slides}) {
    const [caption, setCaption] = useState(0);
    const [current, setCurrent] = useState(0);
    const l = slides.length
    const cl = Captions.length
    
    const nextImage = () => {
        setCurrent(current === l - 1 ? 0 : current + 1)
        setCaption(caption === cl - 1 ? 0 : caption + 1)
    }

    const backImage = () => {
        setCurrent(current === 0 ? l - 1 : current - 1)
        setCaption(caption === 0 ? cl - 1 : caption - 1)
    }
    console.log(caption);
    console.log(current);


    
    const cValue = Captions.map(word => {
        const cont = {};

        cont[word.id] = word.value;

        return cont;
      })
      console.log(cValue);


    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    if(!Array.isArray(Captions) || Captions.length <= 0){
        return null;
    }

  

   
    return (
        <div>
             
           
              <img className={styles.backImageButton} src='icons/leftArrow.png' style={{height:30, width:40}} onClick={backImage} />
              <img  className={styles.nextImageButton} src='icons/rightArrow.png' style={{height:30, width:40}} onClick={nextImage}/>
                {ImagesD.map((s, index) => {
                return (
                    <div className={index === current ? 'active' : 'image'} key={index}>
                        {index === current && (
                            <img src={s.image} className={styles.imagesOnSlide} />
                        )}
                    </div>
                )
            })}
            {Captions.map((c, index) => {
                return (
                    <div className={index === caption ? 'active' : 'caption'} key={index}>
                        {index === caption && (
                            <div id={styles.testOnImageHere}>
                            <p >{c.value}</p>
                            </div>
                        )}
                    </div>
                )
            })}


        </div>
    )
}