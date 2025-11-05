import { ref, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useNavbar() {
    const categories = ref([
        {
            name: 'Team',
            icon: 'M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        },
        {
            name: 'Project',
            icon: 'M19 4H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h4v4l4-4h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z M9 9h.01 M15 9h.01 M9 14c1.5 1.5 4.5 1.5 6 0 M11 4V2h2v2 M3 10H2v4h1 M21 10h1v4h-1'
        },
        {
            name: 'Technology',
            icon: 'M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Zm0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z'
        },
        {
            name: 'Timeline',
            icon: 'M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z'
        },
    ])

    const activeCategory = ref(null)
    const navListRef = ref(null)
    const highlighterStyle = ref({
        width: '0px',
        left: '0px',
        opacity: 0,
    })

    const route = useRoute()

    function pathTocategory(path) {
        if (path === '/') return null
        const name = path.substring(1)
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    function updateHighlighter(targetElement) {
        if (!targetElement) {
            highlighterStyle.value.opacity = 0
            return
        }

        const navList = navListRef.value
        if (!navList) return

        const targetRect = targetElement.getBoundingClientRect()
        const navListRect = navList.getBoundingClientRect()

        const left = targetRect.left - navListRect.left
        const width = targetRect.width

        highlighterStyle.value = {
            width: `${width}px`,
            left: `${left}px`,
            opacity: 1,
        }
    }

    function clearActive() {
        activeCategory.value = null
        updateHighlighter(null)
    }

    watch(() => route.path, (newPath) => {
        const categoryName = pathTocategory(newPath)
        activeCategory.value = categoryName

        nextTick(() => {
            if (categoryName) {
                const activeEl = navListRef.value.querySelector(`[data-category="${categoryName}"]`)
                updateHighlighter(activeEl)
            } else {
                updateHighlighter(null)
            }
        })
    }, { immediate: true })

    onMounted(() => {
        nextTick(() => {
            if (navListRef.value) {
                const initialCategory = pathTocategory(route.path)
                activeCategory.value = initialCategory

                if (initialCategory) {
                    const initialActiveEl = navListRef.value.querySelector(
                        `[data-category="${initialCategory}"]`
                    )
                    updateHighlighter(initialActiveEl)
                } else {
                    updateHighlighter(null)
                }

                setTimeout(() => {
                    const el = navListRef.value.querySelector('div.absolute')
                    if (el) {
                        el.style.transition = 'all 300ms ease-in-out'
                    }
                }, 50)
            }
        })
    })

    return {
        categories,
        activeCategory,
        navListRef,
        highlighterStyle,
        clearActive
    }
}