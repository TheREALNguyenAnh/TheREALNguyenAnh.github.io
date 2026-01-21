// Theme toggle functionality
(function() {
    const THEME_KEY = 'portfolio-theme';
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    
    // Apply theme on page load
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.getElementById('theme-toggle');
        
        if (!toggle) return;
        
        // Set initial toggle state
        toggle.checked = savedTheme === 'dark';
        
        // Handle toggle change
        toggle.addEventListener('change', function() {
            const theme = this.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(THEME_KEY, theme);
        });
    });
})();
