// Fireflies animation
const canvas = document.getElementById('fireflies');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireflies = [];
    for (let i = 0; i < 50; i++) {
        fireflies.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 0.8,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random(),
            fadeSpeed: (Math.random() * 0.015) + 0.004
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        fireflies.forEach(fly => {
            ctx.beginPath();
            ctx.arc(fly.x, fly.y, fly.radius, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(fly.x, fly.y, 0, fly.x, fly.y, fly.radius * 4);
            gradient.addColorStop(0, `rgba(255, 213, 79, ${fly.opacity})`);
            gradient.addColorStop(1, 'rgba(255, 213, 79, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
            
            fly.x += fly.speedX;
            fly.y += fly.speedY;
            
            if (fly.x < 0 || fly.x > canvas.width) fly.speedX *= -1;
            if (fly.y < 0 || fly.y > canvas.height) fly.speedY *= -1;
            
            fly.opacity += fly.fadeSpeed;
            if (fly.opacity >= 1 || fly.opacity <= 0.1) fly.fadeSpeed *= -1;
        });
        
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Geometric patterns
const layer1 = document.getElementById('geo-layer-1');
const layer2 = document.getElementById('geo-layer-2');

if (layer1 && layer2) {
    // Create circles
    for (let i = 0; i < 5; i++) {
        const circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.border = '1px solid #7cb342';
        circle.style.borderRadius = '50%';
        const size = 200 + i * 150;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.top = Math.random() * 100 + '%';
        circle.style.left = Math.random() * 100 + '%';
        circle.style.animation = `float ${20 + i * 2}s ease-in-out infinite`;
        circle.style.animationDelay = i * 2 + 's';
        layer1.appendChild(circle);
    }

    // Create lines
    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.background = 'linear-gradient(90deg, transparent, #7cb342, transparent)';
        line.style.height = '1px';
        line.style.width = '100%';
        line.style.top = (i * 12.5) + '%';
        line.style.animation = `slide ${15 + i}s linear infinite`;
        line.style.animationDelay = i * 1.5 + 's';
        layer2.appendChild(circle);
    }
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(180deg); }
    }
    @keyframes slide {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
`;
document.head.appendChild(style);
