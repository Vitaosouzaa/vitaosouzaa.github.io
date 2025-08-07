const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');
const acordeons = document.querySelectorAll('.acordeon');

acordeonTriggers.forEach ((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement; // O elemento 'acordeon' recebe o elemento pai do 'trigger'.
    // Isso é útil para acessar ou manipular o container principal do acordeon,
    // geralmente para abrir, fechar ou alterar seu estado visual.
        acordeon.classList.toggle('open');
    })
})

// Garante que todas as janelas comecem fechadas
acordeons.forEach((acordeon) => {
    acordeon.classList.remove('open');
});
