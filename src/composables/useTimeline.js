import { ref } from 'vue'

export function useSprints() {
    const sprints = ref([
        {
            id: 1,
            title: 'Initial Setup & Onboarding',
            description:
                'Introduced the team, set up all required accounts and tools, and prepared the initial project environment and structure.',
            filename: 'Sprint1'

        },
        {
            id: 2,
            title: 'Architecture & Research',
            description:
                'Finalized the tech stack, designed the AI safety pipeline, implemented the first data crawler, and defined core architecture decisions for the web and LLM systems.',
            filename: 'Sprint2'

        },
        {
            id: 3,
            title: 'Web Implementation Setup',
            description:
                'Set up the full Laravel–React–Tailwind stack, integrated the ID-SK government design system, and prepared the foundation for the upcoming layout implementation.',
            filename: 'Sprint3'

        },
        {
            id: 4,
            title: 'First Web–AI POC Integration',
            description:
                'Implemented the full chat UI, connected the web app with the AI API including authentication, and published both the web and AI model projects to the official UUPV GitLab repositories.',
            filename: 'Sprint4'

        },
        {
            id: 5,
            title: 'Chat UI',
            description:
                'Created the AI chat interface with typing indicators and fade animations.',
            filename: 'Sprint5'
        },
        {
            id: 6,
            title: 'Timeline Section',
            description:
                'Added the final timeline visualization with smooth transitions and glassmorphism.',
            filename: 'Sprint6'
        }
    ])

    return { sprints }
}