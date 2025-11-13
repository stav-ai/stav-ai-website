import { ref } from 'vue'

export function useSprintInfo() {
    const content = ref('')
    const isLoading = ref(false)

    const loadSprintInfo = async (filename) => {
        try {
            isLoading.value = true
            const module = await import(`../data/sprint-info/${filename}.md?raw`)
            content.value = module.default
        } catch (err) {
            console.error('Error loading sprint info:', err)
            content.value = 'Info not available for this sprint.'
        } finally {
            isLoading.value = false
        }
    }

    return { content, isLoading, loadSprintInfo }
}
