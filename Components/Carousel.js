import styles from '../styles/Work.module.css'
import React, { useState } from 'react'
import { useMediaQuery } from "@chakra-ui/react"

export const CarouselItem = ({ children, width }) => {
    return (
        <div className={styles.carouselItem} style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isSmall] = useMediaQuery("(max-width: 1200px)")
    const [isVerySmall] = useMediaQuery("(max-width: 800px)")
    const dividingFactor = isSmall ? isVerySmall ? 1 : 2 : 3

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children)/dividingFactor - 1;
        } else if (newIndex >= React.Children.count(children)/dividingFactor) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width:  isSmall ? isVerySmall ? '100%' : '50%' : '33.33%' });
                })}
            </div>
            <div className={styles.indicators}>
                <button onClick={() => { updateIndex(activeIndex - 1); }}>
                    Prev
                </button>
                {/* {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? styles.active : ""}`}
                            onClick={() => { updateIndex(index)}}>
                            {index + 1}
                        </button>
                    );
                })} */}
                <button onClick={() => { updateIndex(activeIndex + 1); }}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel
