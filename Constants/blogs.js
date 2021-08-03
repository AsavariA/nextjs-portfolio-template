import blog from '../styles/projects/blog.jpg'

export const custom_blogs = [
    // please add only upto 6 blogs for maintaining the ui
    {
        title: 'Blog Tilte', //blog title
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum', //blog decription
        link: 'www.google.com', //link your blog here
        thumbnail: blog, //blog image, can be an import or link
        categories: ['jim', 'pam', 'dwight'] //eg. web developement, prgramming, lifestyle etc.
    },
    {
        title: 'Blog Tilte',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
        link: 'www.google.com',
        thumbnail: blog,
        categories: ['jim', 'pam', 'dwight']
    },
    {
        title: 'Blog Tilte',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
        link: 'www.google.com',
        thumbnail: blog,
        categories: ['jim', 'pam', 'dwight']
    },
    {
        title: 'Blog Tilte',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
        link: 'www.google.com',
        thumbnail: blog,
        categories: ['jim', 'pam', 'dwight']
    },
]

// uncomment the following code if you want to fetch your medium articles and comment out the custom blogs code above
// export const medium_blogs = { username: 'yourusername'}

// uncomment the following code if you want to fetch your devto articles and comment out the custom blogs code above
// export const dev_to = { username: 'yourusername'}