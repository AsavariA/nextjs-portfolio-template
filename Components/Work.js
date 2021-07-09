import styles from '../styles/Work.module.css'
import WorkProject from './WorkProject'
import BlogCard from './BlogCard';
import { projects } from '../Collections/projects'
import { useState, useEffect } from 'react';
import Carousel, { CarouselItem } from "./Carousel";

const Work = ({ currentTheme }) => {

    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ambavaneasavari')
            .then(response => response.json())
            .then(data => setBlogList(data.items))
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <div className={styles.workHeading}>Projects and Blogs</div>
            <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
                {
                    projects.map((project) => {
                        return (
                            <div key={project.id}>
                                <WorkProject currentTheme={currentTheme} project={project} />
                            </div>
                        )
                    })
                }
            </div>
            {/* {blogList ?
                blogList.map((blog, key) => {
                    return (
                        <div key={key}>
                            <BlogCard blog={blog} currentTheme={currentTheme} />
                        </div>
                    )
                }) : <div>Loading...</div>
            } */}
            <Carousel>
                {blogList.map((blog, key) => {
                    return (
                        <CarouselItem key={key}>
                                <BlogCard blog={blog} currentTheme={currentTheme} />
                        </CarouselItem>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Work
