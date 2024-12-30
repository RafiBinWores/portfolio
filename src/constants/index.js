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

const articles = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "The Evolution of Cyber Threats in the Digital Age",
        description: "From Viruses to Ransomware: The Changing Landscape of Malware.",
        created_at: "January 12, 2022"
    },
    {
        id: 2,
        image: "https://plus.unsplash.com/premium_photo-1676009547155-32d75ba9d089?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "AI and Machine Learning in Cybersecurity",
        description: "Machine Learning Algorithms in Identifying Malware Patterns.",
        created_at: "April 8, 2022"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Protecting Your Digital Identity in 2024",
        description: "The Importance of Digital Hygiene in a Connected World.",
        created_at: "March 15, 2022"
    },
]

const footerLinks = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About",
        link: "#about"
    },
    {
        id: 3,
        name: "Services",
        link: "#services"
    },
    {
        id: 4,
        name: "Articles",
        link: "#articles"
    },
    {
        id: 5,
        name: "Contact",
        link: "#contact"
    },
]

export {heroData, services, articles, footerLinks};