import { onMounted } from 'vue'

export function useBlobAnimation(canvasRef) {
    onMounted(() => {
        const canvas = canvasRef.value
        if (!canvas) return;

        const ctx = canvas.getContext('2d')
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Define base colors
        const colors = [
            [2, 132, 199], // sky-400
            [37, 99, 235], // blue-600
            [139, 92, 246], // violet-500
        ]

        let t = 0
        let animationFrameId = null;

        function draw() {
            if (!canvasRef.value) return; // Stop if component is unmounted

            const w = canvas.width
            const h = canvas.height
            ctx.clearRect(0, 0, w, h)

            // Smooth 3-color blending
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

            // Radial gradient
            const gradient = ctx.createRadialGradient(
                w / 2 + Math.sin(t / 300) * 80,
                h / 2 + Math.cos(t / 350) * 80,
                100,
                w / 2,
                h / 2,
                600
            )
            gradient.addColorStop(0, gradientColor)
            gradient.addColorStop(1, 'rgba(255,255,255,0)')
            ctx.fillStyle = gradient

            // Blob shape
            ctx.beginPath()
            const baseRadius = Math.min(w, h) * 0.55
            const distortion = 300
            const points = 40
            for (let i = 0; i <= points; i++) {
                const angle = (i / points) * Math.PI * 2
                const r1 = Math.sin(angle * 2 + t / 150) * distortion * 0.4
                const r2 = Math.sin(angle * 5 + t / 250) * distortion * 0.3
                const r3 = Math.sin(angle * 8 + t / 400) * distortion * 0.3
                const radius = baseRadius + r1 + r2 + r3
                const x = w / 2 + Math.cos(angle) * radius
                const y = h / 2 + Math.sin(angle) * radius
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.closePath()

            ctx.globalAlpha = 0.8
            ctx.filter = 'blur(40px)'
            ctx.fill()

            const movementSpeed = window.innerWidth < 768 ? 2 : 4;
            t += movementSpeed;

            animationFrameId = requestAnimationFrame(draw)
        }
        draw()

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    })
}