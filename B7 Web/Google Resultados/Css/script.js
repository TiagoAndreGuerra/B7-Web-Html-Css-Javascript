// Script para o accordion (perguntas)
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const toggle = this.querySelector('.accordion-toggle');
        
        // Remove a classe show de todos os outros accordion-content
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.classList.remove('show');
                item.previousElementSibling.querySelector('.accordion-toggle').textContent = '+';
            }
        });
        
        // Toggle da classe show no accordion-content clicado
        content.classList.toggle('show');
        
        // Alterna o símbolo + e -
        if (content.classList.contains('show')) {
            toggle.textContent = '−';
        } else {
            toggle.textContent = '+';
        }
    });
});
