import { ref } from 'vue'
import samuelPhoto from '../assets/member.png'
import rastislavPhoto from '../assets/member.png'
import kristianPhoto from '../assets/member.png'
import patrikPhoto from '../assets/member.png'
import matejPhoto from '../assets/member.png'
import tomasPhoto from '../assets/member.png'
import richardPhoto from '../assets/member.png'
import michalPhoto from '../assets/member.png'

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
            name: 'Richard Šárka',
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
