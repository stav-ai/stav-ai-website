import { ref } from 'vue'

export function useSprints() {
    const sprints = ref([
        {
            id: 1,
            title: 'Foundation & Analysis',
            description:
                'Mapped the problem space, researched existing solutions, and collected foundational data from legal and public sources.'
        },
        {
            id: 2,
            title: 'Model Prototyping & UI',
            description:
                'Built, trained, and tested the first model while designing and implementing the initial chatbot user interface.'
        },
        {
            id: 3,
            title: 'Team Section',
            description:
                'Developed a responsive, animated team showcase section for the landing page.'
        },
        {
            id: 4,
            title: 'Backend Link',
            description:
                'Integrated backend endpoints and established the initial API structure.'
        },
        {
            id: 5,
            title: 'Chat UI',
            description:
                'Created the AI chat interface with typing indicators and fade animations.'
        },
        {
            id: 6,
            title: 'Timeline Section',
            description:
                'Added the final timeline visualization with smooth transitions and glassmorphism.'
        }
    ])

    return { sprints }
}