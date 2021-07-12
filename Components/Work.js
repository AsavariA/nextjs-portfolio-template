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
                            <div key={project.id} data-aos='fade-up'>
                                <WorkProject currentTheme={currentTheme} project={project} />
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ backgroundColor: currentTheme.secondary }}>
                {
                    blogList ? <Carousel currentTheme={currentTheme}>
                        {blogList.map((blog, key) => {
                            return (
                                <CarouselItem key={key} currentTheme={currentTheme}>
                                    <BlogCard blog={blog} currentTheme={currentTheme} />
                                </CarouselItem>
                            )
                        })}
                    </Carousel> : <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default Work
