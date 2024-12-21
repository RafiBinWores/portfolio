import fb from '../assets/aboutIcon/fb.png';
import instagram from '../assets/aboutIcon/instagram.png';
import dribble from '../assets/aboutIcon/dribble.png';
import linkedin from '../assets/aboutIcon/linkedin.png';
import behance from '../assets/aboutIcon/behance.png';
import download from '../assets/aboutIcon/download.png';



import softwareDevelopment from '../assets/service/softwareDevelopment.png';
import computerNetworking from '../assets/service/computerNetworking.png';
import cybersecurity from '../assets/service/cybersecurity.png';
import dataBackup from '../assets/service/dataBackup.png';
import ITConsulting from '../assets/service/ITConsulting.png';
import seo from '../assets/service/seo.png';
import socialMarketing from '../assets/service/socialMarketing.png';

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

const services = [
    {
        id: 1,
        image: cybersecurity,
        name: "Cybersecurity.",
        description: "Cybersecurity is the cornerstone of protecting digital assets, ensuring data confidentiality, integrity, and availability. It encompasses strategies to safeguard systems from evolving threats, fostering trust and resilience in the digital landscape.",
    },
    {
        id: 2,
        image: softwareDevelopment,
        name: "Custom Software Development.",
        description: "Custom software development involves designing, building, and deploying tailored solutions to meet specific business needs. It ensures scalability, efficiency, and seamless integration with existing systems for optimal performance.",
    },
    {
        id: 3,
        image: seo,
        name: "Search Engine Optimization (SEO).",
        description: "Captures the essence of leveraging content creation and media distribution to create powerful and memorable experiences that resonate with audiences. Here's how this concept unfol.  involves crafting compelling and relevant content in various formats:",
    },
    {
        id: 4,
        image: computerNetworking,
        name: "Computer Networking.",
        description: "Search Engine Optimization (SEO) enhances a website's visibility on search engines by optimizing content, structure, and technical elements. Effective SEO drives organic traffic, improves user engagement, and boosts overall online presence.",
    },
    {
        id: 5,
        image: dataBackup,
        name: "Backup & Recovery Systems.",
        description: "Backup and Recovery Systems ensure the protection and restoration of critical data in case of accidental loss, hardware failure, or cyberattacks. They provide businesses with continuity by securely storing data copies and enabling quick recovery to minimize downtime.",
    },
    {
        id: 6,
        image: ITConsulting,
        name: "IT Consulting.",
        description: "IT consulting helps businesses leverage technology to achieve their goals by providing expert advice, strategic planning, and tailored solutions. It bridges the gap between technical innovation and business needs, driving efficiency, growth, and competitive advantage.",
    },
    {
        id: 7,
        image: socialMarketing,
        name: "Social Media Marketing.",
        description: "Social Media Marketing leverages platforms like Facebook, Instagram, and LinkedIn to engage audiences, build brand awareness, and drive conversions. It combines strategy, content creation, and analytics to deliver targeted messages and measurable results.",
    },
]

export {heroData, about, services};