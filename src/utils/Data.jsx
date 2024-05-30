import { FaReact, FaCss3Alt, FaHtml5, FaBootstrap, FaSass, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedux, SiNextdotjs, SiJest, SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import project0 from '../assets/HireU.png'
import project1 from "../assets/YouTube_Clone.png";
import project2 from "../assets/Crud_Operation.png";
import project3 from "../assets/E-commerce.png";
import project4 from "../assets/Blog-App.png";
import project5 from "../assets/Food-App.png";
import project6 from "../assets/Real-Estate.png";
import project7 from "../assets/Food-Menu-App.png";

export const Skills = [
     {
          id: 0,
          tech: "Next JS",
          icon: <SiNextdotjs />,
     },
     {
          id: 1,
          tech: "REACT Native",
          icon: <TbBrandReactNative />,
     },
     {
          id: 2,
          tech: "REACT JS",
          icon: <FaReact />,
     },
     {
          id: 3,
          tech: "REDUX",
          icon: <SiRedux />,
     },
     {
          id: 4,
          tech: "TYPESCRIPT",
          icon: <SiTypescript />,
     },
     {
          id: 5,
          tech: "JAVASCRIPT",
          icon: <IoLogoJavascript />,
     },
     {
          id: 6,
          tech: "Jest",
          icon: <SiJest />,
     },
     {
          id: 7,
          tech: "Postman",
          icon: <SiPostman />,
     },
     {
          id: 8,
          tech: "CSS",
          icon: <FaCss3Alt />,
     },
     {
          id: 9,
          tech: "HTML",
          icon: <FaHtml5 />,
     },
     {
          id: 10,
          tech: "SCSS",
          icon: <FaSass />,
     },
     {
          id: 11,
          tech: "BOOTSTRAP",
          icon: <FaBootstrap />,
     },
     {
          id: 12,
          tech: "TAILWIND CSS",
          icon: <SiTailwindcss />,
     },
     {
          id: 13,
          tech: "JAVA",
          icon: <FaJava />,
     },
];

export const projectDetails = [
     {
          id: 0,
          project_name: "HireU",
          project_desc:
               "Introducing MyTube, the ultimate YouTube clone powered by React Native and real-time YouTube API integration. Explore trending videos, discover new content, and stay updated with the latest uploads from your favorite creators—all with a sleek and responsive interface courtesy of NativeWind. With [Your App Name], the world of video content is at your fingertips. Like, comment, share, and save your favorite videos for later viewing. Download now and experience the future of video streaming, all from the palm of your hand.",
          tech_stack: ["NextJS", "Tailwind CSS", "JSearch Rest API"],
          project_img: project0,
          live_link: "https://hireu.vercel.app/",
          source_code: "https://github.com/Anukeerth-ek/NextJS-Job-Search",
          reverse: false,
     },
     {
          id: 1,
          project_name: "MyTube",
          project_desc:
               "Introducing MyTube, the ultimate YouTube clone powered by React Native and real-time YouTube API integration. Explore trending videos, discover new content, and stay updated with the latest uploads from your favorite creators—all with a sleek and responsive interface courtesy of NativeWind. With [Your App Name], the world of video content is at your fingertips. Like, comment, share, and save your favorite videos for later viewing. Download now and experience the future of video streaming, all from the palm of your hand.",
          tech_stack: ["REACT Native", "Native Wind", "YouTube Api"],
          project_img: project1,
          live_link: "",
          source_code: "https://github.com/Anukeerth-ek/React-Native-YouTube-Clone",
          reverse: true,
     },
     {
          id: 2,
          project_name: "Crud Master",
          project_desc:"Introducing Crud Master, a dynamic CRUD operations app with user authentication, analytics, and Firebase integration. Admins can effortlessly manage logged-in users, view their data, and delete sessions as needed. Styled with SCSS, Crud Master offers a sleek and intuitive interface for seamless navigation. Simplify data management and stay informed with real-time analytics—all in one powerful platform",
          tech_stack: ["REACT JS", "Firebase", "SCSS"],
          project_img: project2,
          live_link: "https://crudmaster.netlify.app",
          source_code: "https://github.com/Anukeerth-ek/React-CRUD-APP",
          reverse: false,
     },
     
     {
          id: 3,
          project_name: "Blog-App",
          project_desc:
               "In this groundbreaking blog app, I've streamlined data management with a sleek custom JSON system, simplifying blog organization. Dynamic category filtering lets users dive into their favorite topics effortlessly. Pagination ensures smooth navigation through captivating content. Plus, it's fully responsive for an immersive experience on any device. It's not just a blog app—it's a tailored journey through curated content for the modern reader.",
          tech_stack: ["REACT JS", "TAILWIND CSS", "JSON"],
          project_img: project4,
          live_link: "https://nativedevdiary.netlify.app",
          source_code: "https://github.com/Anukeerth-ek/react-blog-app",
          reverse: true,
     },
     {
        id: 4,
        project_name: "E-Commerce-App",
        project_desc:
             "Conceptualized and developed a dynamic shopping experience. Manage your items effortlessly with our sleek cart feature. Secure transactions are guaranteed with Razor payment integration. Celebrate success with React Confetti animations. Browse with ease using React Sleek Slider. Get answers fast with our comprehensive FAQ. Plus, enjoy perks like React Scratch Coupon for exciting rewards. Rediscover shopping with us!",
        tech_stack: ["REACT JS", "CSS"],
        project_img: project3,
        live_link: "https://glimpseshope.netlify.app",
        source_code: "https://github.com/Anukeerth-ek/E-Commerce-ReactJS",
        reverse: false,
   },

     {
          id: 5,
          project_name: "Food-App",
          project_desc:
               "In this JavaScript food app, I seamlessly integrate the MealDB API for a rich recipe database. With a beautiful UI, users explore categories and discover culinary delights effortlessly. Whether it's quick meals or gourmet inspiration, my app has it covered.",
          tech_stack: ["JAVASCRIPT", "CSS"],
          project_img: project5,
          live_link: "https://zoomplates.netlify.app",
          source_code: "https://github.com/Anukeerth-ek/Food-Delivery-Javascript",
          reverse: true,
     },
     {
          id: 6,
          project_name: "Real-Estate",
          project_desc:
               "In this JavaScript real estate app, users can explore property details, amenities, news updates, and a blog. The About section offers insights into the company or agency. With a sleek interface, navigating through sections is intuitive, ensuring a seamless experience for users.",
          tech_stack: ["JAVASCRIPT", "CSS"],
          project_img: project6,
          live_link: "https://cozycrest.netlify.app",
          source_code: "https://github.com/Anukeerth-ek/RealEstate-Javascript",
          reverse: false,
     },
     {
          id: 7,
          project_name: "Food Menu-App",
          project_desc:
               "In our React app, styled with Sass, is your gateway to a world of delectable flavors. Powered by the MealDB API, our real-time updates ensure you're always in the know about the latest gastronomic treasures. Explore with ease using our seamless pagination, indulge in trending dish highlights, and uncover culinary delights with our dish name-based filtration. Join us on a journey of taste sensations and culinary discoveries!",
          tech_stack: ["REACT JS", "SASS"],
          project_img: project7,
          live_link: "https://deliciousdrive.netlify.app",
          project_source_code: "https://github.com/Anukeerth-ek/Food-App-React",
          reverse: true,
     },
];

export const navLinks = [
     {
          id: 0,
          name: "Home",
          href: "Home",
     },
     {
          id: 1,
          name: "My skills",
          href: "Skills",
     },
     {
          id: 2,
          name: "My project",
          href: "Projects",
     },
     {
          id: 3,
          name: "Contact",
          href: "Contact",
     },
];
