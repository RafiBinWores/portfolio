import fb from '../assets/aboutIcon/fb.png';
import instagram from '../assets/aboutIcon/instagram.png';
import dribble from '../assets/aboutIcon/dribble.png';
import linkedin from '../assets/aboutIcon/linkedin.png';
import behance from '../assets/aboutIcon/behance.png';
import download from '../assets/aboutIcon/download.png';

const heroData = [
    {
        id: 1,
        name: "Kahafil Ora.",
        designation: "Managing Director | Co-founder | IT Innovator",
        shortIntro:"A seasoned leader driving IT solutions, business strategy, and education to empower communities and businesses through innovation.",
        image: "https://i.postimg.cc/YjBhMMJH/hero1.png",
        state:[
            {
                id:1,
                count: "21 Y.",
                title: "Experience"
            },
            {
                id:2,
                count: "250+",
                title: "Project Completed"
            },
            {
                id:3,
                count: "2000+",
                title: "Happy Client"
            }
        ]
    },
]
const about = [
    {
        id: 1,
        title: "Professional Innovator | Business Leader | Technology Advocate",
        description: "A visionary leader with over a decade of experience in innovation and business growth. As Managing Director of Goinnovior Limited and Co-founder of 360D Soul Limited, Lifeinnovior, and Codeinnovior, integrates technology, business, and societal impact. From delivering ICT and InfoSec solutions to championing mental health and free technology education, is committed to driving excellence and empowering communities.",
        image: "https://i.postimg.cc/TPSCTFXw/about.jpg",
        downloadIcon: download,
        socials:[
            {
                name: "Facebook",
                icon: fb,
                link: "https://www.facebook.com/",
            },
            {
                name: "Instagram",
                icon: instagram,
                link: "https://www.instagram.com/",
            },
            {
                name: "Dribble",
                icon: dribble,
                link: "https://www.dribble.com/",
            },
            {
                name:"Linkedin",
                icon: linkedin,
                link: "https://www.linkedin.com/",
            },
            {
                name: "Behance",
                icon: behance,
                link: "https://www.behance.com/",
            },
        ]
    }
]

export {heroData, about};