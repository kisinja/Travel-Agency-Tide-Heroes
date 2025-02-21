document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        // Close all other accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) item.classList.add('hidden');
        });

        document.querySelectorAll('.icon').forEach(i => {
            if (i !== icon) i.textContent = '+';
        });

        // Toggle current accordion
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.textContent = '-';
        } else {
            content.classList.add('hidden');
            icon.textContent = '+';
        }
    });
});