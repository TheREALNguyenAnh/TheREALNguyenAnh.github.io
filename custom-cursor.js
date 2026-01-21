// Custom cursor functionality
(function() {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Smooth follow effect
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Add hover effect for interactive elements
    const interactiveElements = 'a, button, input[type="checkbox"], .toggle-switch';
    
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveElements)) {
            cursor.classList.add('cursor-hover');
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveElements)) {
            cursor.classList.remove('cursor-hover');
        }
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
})();
