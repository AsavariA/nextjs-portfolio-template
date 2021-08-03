import styles from '../styles/Work.module.css'
import WorkProject from './WorkProject'
import BlogCard from './BlogCard';
import { projects } from '../Constants/projects'
import { custom_blogs, medium_blogs, dev_to } from '../Constants/blogs'
import { useState, useEffect } from 'react';
import { headings, userinfo } from '../Constants/userinfo'
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from './Experiences';

const Work = ({ currentTheme }) => {

    const [blogList, setBlogList] = useState([])

    // CUSTOM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR CUSTOM BLOGS
    useEffect(() => {
        setBlogList(custom_blogs)
    }, [])

    // MEDIUM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR MEDIUM BLOGS
    // useEffect(() => {
    //     fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${medium_blogs.username}`)
    //         .then(response => response.json())
    //         .then(data => setBlogList(data.items))
    //         .catch(err => console.error(err));
    // }, [])

    // DEV.TO BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR DEV.TO BLOGS
    // useEffect(() => {
    //     fetch(`https://dev.to/api/articles?username=${dev_to.username}`)
    //         .then(response => response.json())
    //         .then(data => setBlogList(data))
    //         .catch(err => console.error(err));
    // }, [])

    return (
        <div>
            <div className={styles.workHeading}>{headings.workMainPage}</div>
            <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
                {
                    projects.map((project, key) => {
                        return (
                            <div key={key} data-aos='fade-up'>
                                <WorkProject currentTheme={currentTheme} project={project} id={key} />
                            </div>
                        )
                    })
                }
            </div>
            {
                userinfo.experience.visible ? <Experiences currentTheme={currentTheme} /> : null
            }
            {
                userinfo.blogs.visible ?
                    <div style={{ backgroundColor: currentTheme.secondary }}>
                        {
                            blogList ? <Carousel currentTheme={currentTheme}>
                                {blogList.slice(0, 6).map((blog, key) => {
                                    return (
                                        <CarouselItem key={key} currentTheme={currentTheme}>
                                            <BlogCard blog={blog} currentTheme={currentTheme} />
                                        </CarouselItem>
                                    )
                                })}
                            </Carousel> : null
                        }
                    </div> : null
            }

        </div>
    )
}

export default Work
