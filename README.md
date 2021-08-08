<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">NextJS Portfolio Template</h1>
  <p align="center">
    Portfolio website template!
    <br />
    <a href="https://michaelscott-nextjstemp.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/AsavariA/nextjs-portfolio-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/AsavariA/nextjs-portfolio-template/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#sections-available">Sections Available</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#demos">Demos</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
	    <a href="#usage">Usage</a>
	    <ul>
        <li><a href="#user-info">User Info</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#setting-up-images">Setting up Images</a></li>
        <li><a href="#setting-up-themes">Setting up Themes</a></li>
        <li><a href="#setting-up-contact-form">Setting up Contact Form</a></li>
      </ul>
	</li>
	<li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Making a Portfolio website from scratch can be a tedious process. This repository solves that problem. How? Well, it is a easy-to-use portfolio template! You can use it by following a few simple instructions given below. Feel free to suggest changes and features too!

### Sections Available

✔️ Landing Page - greeting\
✔️ Work section\
✔️ Capabilities\
✔️ Education\
✔️ About \
✔️ Projects\
✔️ Work Experience\
✔️ Blogs - Custom, Medium and DevTo support\
✔️ Contact me\
✔️ Socials

### Built With
🔧 [NextJS](https://nextjs.org/)\
🔧 [Chakra UI](https://chakra-ui.com/)

### Demos
To view a demo, [click here](https://michaelscott-nextjstemp.vercel.app/)\
To view a live example, [click here](https://asavariambavane.vercel.app/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
npm - Latest version of npm works the best with this project. Run the following command to install it.
  ```sh
  npm -v //checks npm version
  npm install npm@latest -g //installs latest npm version
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AsavariA/nextjs-portfolio-template.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage
These are instructions to use the project once you have cloned it. Follow them step by step for the best experience. Comments are mentioned in the files as guides.

### User Info
Go to the file ***userinfo.js*** inside the ***Constants*** folder. Fill up this file like you are filling up a form.

 1. logoText
 2. contact - email, phone(leave blank if not willing to use), countrycode
 3. socials - follow the json format
 4. greeting - title, subtitle
 5. capabilities - follow the json format
 6. about - content, resume link ( can be drive link etc )
 7. education - follow the json format
 8. experience - follow the json format
 9. blogs - if you want this section in your website, set it true, otherwise false. If true, follow the instructions in <a href="#blogs">blog section</a>
 10. projects - go to  **Constants > projects.js** and follow the json format. Import images as mentioned in the imports.
 11. headings - you can customise all the headings in the template with this. 
 12. ctas - you can customise all the ctaTexts in the template with this. 

### Blogs
This instruction set is only applicable if blogs are set to visible. The blogs section provides 3 kinds of support. **Custom blogs**, importing **medium blogs**, or importing **devto blogs**.
 
 1. Go to **Constants > blogs.js**  
 2. You will be able to see 3 different exports. Choose the one you want and comment out the others.
 3. If your choice is **Custom blogs**, fill in the details as shown in json format.
 4. If your choice is **Medium blogs**, then uncomment the medium blogs export down below and fill in your **medium username**.
 5. Now move to **Components > Work.js**.
 6. You will see three commented out sections each with a useEffect and heading ***MEDIUM BLOGS SUPPORT***
 7. Uncomment the useEffect in the section you want and comment the other two out.
 8. You are set to import your medium blogs now!
 9. Follow the steps from 4 - 8 but with DevTo details if your choice is DevTo blogs.

### Setting up Images
There are only 3 images you need to set up externally. These images have to have a particular name and format and location. 

<ol>
    <li>
      Landing Page Background Image
      <ul>
        <li>name - background</li>
        <li>type - .jpg</li>
        <li>filename - background.jpg</li>
        <li>location - root > styles</li>
      </ul>
    </li>
    <li>
      About Section Background Image
      <ul>
        <li>name - about</li>
        <li>type - .jpg</li>
        <li>filename - about.jpg</li>
         <li>location - root > styles</li>
      </ul>
    </li>
    <li>
      Favicon Image
      <ul>
        <li>name - favicon</li>
        <li>type - .jpg</li>
        <li>filename - favicon.jpg</li>
         <li>location - root > public</li>
      </ul>
    </li>
  </ol>

### Setting up Themes
Go to the file ***theme.js*** inside the folder ***Constants***.
You can change the colors as per your wish or leave the theme as it is. Make sure to keep all the fields intact because skipping any field can lead to errors.


### Setting up Contact Form
For this step, you will need to create a **new google account** which will send you the form data. Need for a new account - well, it is advisable to use this new account only for this purpose so as to **prevent giving this template access** to your personal emails ( which are on your original email account ). \

Once you have made your account, make sure you have selected that account and go to [this link](https://myaccount.google.com/lesssecureapps). **Allow** the access.\

Now go to the **test.env** file. Rename this file to only **.env**\
*If your project is on github, please make sure to exclude this file from github ( put it in gitignore ) since it contains private / environmental variables.*

  ```
//type in all data without the < and > signs.

  PASSWORD = <sender-mail-password> //password of newly created account
SENDER = <sender-mail> //email address of newly created account
TO = <reciever-mail> //email address of your personal account (which will be reciever of data in this case)
  ```

**Contact form is now set up!**

### Deployment
To check if your website is running the way you wish, run the following command to start it locally on localhost:3000\
`npm run dev`

To deploy your portfolio, you can use any of the following ways.

 - Vercel - this is the most advisable platform to deploy your nextjs applications because they are the building company and provide the best support for all nextjs websites.
 - Netlify - Use the exclusive nextjs support on netlify to deploy your site.
 
Both of these can be used directly through github and therefore any new changes and updates to your project repository will be updated immediately in the deployment. There are other ways and platforms to deploy your portfolio too.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License.


