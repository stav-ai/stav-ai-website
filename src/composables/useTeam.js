import { ref } from 'vue'
import samuelPhoto from '../assets/members/Samuel.png'
import rastislavPhoto from '../assets/members/Rastislav.png'
import kristianPhoto from '../assets/members/Kristian.png'
import patrikPhoto from '../assets/members/Patrik.png'
import matejPhoto from '../assets/members/Matej.png'
import tomasPhoto from '../assets/members/Tomas.png'
import richardPhoto from '../assets/members/Richard.png'
import michalPhoto from '../assets/members/Michal.png'

export function useTeamMembers() {
    const teamMembers = ref([
        {
            name: 'Tomáš Drga',
            position: 'Full-stack Developer',
            description:
                'Tomáš builds scalable systems and robust APIs, and also develops both the UI and backend of the chat platform. He ensures the technical backbone stays efficient, reliable, and ready for future growth.',
            photo: tomasPhoto,
        },
        {
            name: 'Patrik Drdák',
            position: 'Data & Business Analyst',
            description:
                'Patrik connects technology with strategy while also building the crawler, preparing datasets, and running data tests. He transforms insights into clear product direction and ensures the AI has high-quality data to learn from.',
            photo: patrikPhoto,
        },
        {
            name: 'Matej Drienovský',
            position: 'Full-stack Developer',
            description:
                'Matej bridges frontend and backend systems, working on both the UI and backend of the chat platform. He ensures every feature works smoothly from concept to deployment.',
            photo: matejPhoto,
        },
        {
            name: 'Rastislav Pašek',
            position: 'AI Engineer',
            description:
                'Rastislav transforms complex data into intelligent systems—training LLaMA models, building vector databases, and developing the AI infrastructure that powers the platform.',
            photo: rastislavPhoto,
        },
        {
            name: 'Samuel Nagy',
            position: 'Frontend Developer + UX',
            description:
                'Samuel crafts seamless and engaging user experiences. He designs and builds the UI/UX for the chat platform as well as the entire team website, blending clean design with performance-focused frontends.',
            photo: samuelPhoto,
        },
        {
            name: 'Kristián Červenka',
            position: 'AI Engineer',
            description:
                'Kristián focuses on AI model optimization, automation, and performance tuning. He ensures that LLaMA models run faster, smarter, and more reliably across the system.',
            photo: kristianPhoto,
        },
    ])

    const managers = ref([
        {
            name: 'Richard Szarka',
            position: 'School Project Manager',
            description:
                'Richard provides academic guidance, reviews our progress, and helps us when we get stuck. He ensures the project aligns with educational standards and supports us with expert feedback.',
            photo: richardPhoto,
        },
        {
            name: 'Michal Štromajer',
            position: 'UUPV Manager',
            description:
                'Michal manages the collaboration with UUPV. He guides us as we build a chatbot for national use and ensures we have the necessary hardware, access, and resources to succeed.',
            photo: michalPhoto,
        },
    ])

    return { teamMembers, managers }
}
