const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && distancia !== '' && tempo !== '' && peso !== '') {

        const velocidademedia = (distancia/(tempo/60)).toFixed(2);
        const pace = (tempo/distancia).toFixed(2);
        const calorias = ((velocidademedia*peso)*0.0175).toFixed(2) ;    

        resultado.textContent = `Olá ${nome}. Você percorreu ${distancia} km em ${tempo} min. Isso quer dizer que a sua velocidade média foi de ${velocidademedia}km/h, o que o corresponde a um pace de ${pace} min/km. Com ${peso}kg, você gastou cerca de ${calorias} cal.`;

    }else {
        resultado.textContent = 'Para calcular o seu IMC , preencha todos os campos.';
    }

}
calcular.addEventListener('click', imc);