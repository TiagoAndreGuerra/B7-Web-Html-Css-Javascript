// Texto Para Programadores //

// Pega a data de hoje no formato YYYY-MM-DD
const hoje = new Date().toISOString().split('T')[0];

// Encontra o campo de data no HTML e define a data máxima como hoje
document.getElementById('data_nascimento').max = hoje;
