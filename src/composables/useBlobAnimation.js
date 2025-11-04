import { onMounted } from 'vue'

export function useBlobAnimation(canvasRef) {
    onMounted(() => {
        const canvas = canvasRef.value
        if (!canvas) return;

        const ctx = canvas.getContext('2d')

        // --- Mouse State ---
        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

        // --- Distortion State ---
        const distortionProps = {
            base: 300,  // The blob's normal "wobbliness"
            max: 1000,   // How "wobbly" it gets when excited
            reactionRadius: 400, // How close the mouse needs to be to have an effect
            easeFactor: 0.05, // How quickly it calms down / excites
            current: 300  // The current distortion, which will ease
        }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()

        // --- Event Listeners ---
        const onMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }
        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', onMouseMove)

        // Define base colors
        const colors = [
            [2, 132, 199], // sky-400
            [37, 99, 235], // blue-600
            [139, 92, 246], // violet-500
        ]

        let t = 0
        let animationFrameId = null;

        function draw() {
            if (!canvasRef.value) return;

            const w = canvas.width
            const h = canvas.height
            const centerX = w / 2;
            const centerY = h / 2;
            ctx.clearRect(0, 0, w, h)


            const dx = mouse.x - centerX
            const dy = mouse.y - centerY
            const distance = Math.sqrt(dx * dx + dy * dy)

            const influence = Math.max(
                0,
                (distortionProps.reactionRadius - distance) / distortionProps.reactionRadius
            )

            const targetDistortion = distortionProps.base + (distortionProps.max - distortionProps.base) * influence

            distortionProps.current += (targetDistortion - distortionProps.current) * distortionProps.easeFactor


            const time = t * 0.002
            const w1 = (Math.sin(time) + 1) / 2
            const w2 = (Math.sin(time + (2 * Math.PI) / 3) + 1) / 2
            const w3 = (Math.sin(time + (4 * Math.PI) / 3) + 1) / 2
            const totalWeight = w1 + w2 + w3
            const n1 = totalWeight > 0 ? w1 / totalWeight : 1/3;
            const n2 = totalWeight > 0 ? w2 / totalWeight : 1/3;
            const n3 = totalWeight > 0 ? w3 / totalWeight : 1/3;

            const blendedR =
                colors[0][0] * n1 + colors[1][0] * n2 + colors[2][0] * n3
            const blendedG =
                colors[0][1] * n1 + colors[1][1] * n2 + colors[2][1] * n3
            const blendedB =
                colors[0][2] * n1 + colors[1][2] * n2 + colors[2][2] * n3
            const gradientColor = `rgb(${blendedR}, ${blendedG}, ${blendedB})`

            const gradient = ctx.createRadialGradient(
                centerX + Math.sin(t / 300) * 80,
                centerY + Math.cos(t / 350) * 80,
                100,
                centerX,
                centerY,
                600
            )
            gradient.addColorStop(0, gradientColor)
            gradient.addColorStop(1, 'rgba(255,255,250,0)')
            ctx.fillStyle = gradient

            // --- Blob Shape ---
            ctx.beginPath()
            const baseRadius = Math.min(w, h) * 0.55
            const distortion = distortionProps.current
            const points = 40
            for (let i = 0; i <= points; i++) {
                const angle = (i / points) * Math.PI * 2
                const r1 = Math.sin(angle * 2 + t / 150) * distortion * 0.4
                const r2 = Math.sin(angle * 5 + t / 250) * distortion * 0.3
                const r3 = Math.sin(angle * 8 + t / 400) * distortion * 0.3
                const radius = baseRadius + r1 + r2 + r3
                const x = centerX + Math.cos(angle) * radius
                const y = centerY + Math.sin(angle) * radius
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.fill()

            const movementSpeed = window.innerWidth < 768 ? 2 : 4;
            t += movementSpeed;

            animationFrameId = requestAnimationFrame(draw)
        }
        draw()

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove); // <-- NEW
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    })
}