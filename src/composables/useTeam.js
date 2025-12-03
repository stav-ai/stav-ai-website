import { ref } from 'vue'
import samuelPhoto from '../assets/members/Samuel.png'
import rastislavPhoto from '../assets/members/Rasto.png'
import kristianPhoto from '../assets/members/Kristian.png'
import patrikPhoto from '../assets/members/Patrik.png'
import matejPhoto from '../assets/members/Matej.png'
import tomasPhoto from '../assets/members/Tomas.png'
import richardPhoto from '../assets/members/Richard.png'
import michalPhoto from '../assets/members/Michal.png'

export function useTeamMembers() {
    const teamMembers = ref([
        {
            name: 'Samuel Nagy',
            position: 'Frontend Developer + UX',
            description:
                'Samuel crafts seamless and engaging user experiences, blending clean design with performance-focused frontends.',
            photo: samuelPhoto,
        },
        {
            name: 'Rastislav Pašek',
            position: 'AI Engineer',
            description:
                'Rastislav transforms complex data into intelligent systems, driving innovation through practical AI applications.',
            photo: rastislavPhoto,
        },
        {
            name: 'Kristián Červenka',
            position: 'AI Engineer',
            description:
                'Kristián focuses on model optimization and automation, making AI solutions faster, smarter, and more reliable.',
            photo: kristianPhoto,
        },
        {
            name: 'Patrik Drdák',
            position: 'Business Analyst',
            description:
                'Patrik connects technology with strategy, turning insights into clear product direction and measurable results.',
            photo: patrikPhoto,
        },
        {
            name: 'Matej Drienovský',
            position: 'Full-stack Developer',
            description:
                'Matej bridges frontend and backend systems, ensuring that every feature works smoothly from concept to deployment.',
            photo: matejPhoto,
        },
        {
            name: 'Tomáš Drga',
            position: 'Full-stack Developer',
            description:
                'Tomáš builds scalable systems and robust APIs, keeping the technical backbone efficient and future-ready.',
            photo: tomasPhoto,
        },
    ])

    const managers = ref([
        {
            name: 'Richard Szarka',
            position: 'School Project Manager',
            description:
                'Richard provides academic guidance and ensures the team’s work aligns with educational standards and goals.',
            photo: richardPhoto,
        },
        {
            name: 'Michal Stromajer',
            position: 'UUPV Manager',
            description:
                'Michal oversees external collaboration and ensures practical applications align with industry expectations.',
            photo: michalPhoto,
        },
    ])

    return { teamMembers, managers }
}
