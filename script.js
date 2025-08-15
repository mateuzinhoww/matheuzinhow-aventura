const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('next-date');

        atual.classList.remove('ativo');
        document.getElementById(nextstep).classList.add('active');
    })
})
