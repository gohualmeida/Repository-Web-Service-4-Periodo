setTimeout( () => {
    console.log('Time 1 carregado com 10 segundos') 
}, 10000);

setTimeout(() => {
    console.log('Time 2 carregado com 5 segundos');
}, 5000);

console.log('log 1'); 

setTimeout(() => {
    console.log('Time 3 carregado com 8 segundos');
}, 8000);

console.log('Log 2');

const promessa = new Promise( (resolve, reject) => {
    let condicao = true;
    if(condicao = true){
        resolve('tudo ok');
    }
    else {
        reject(Error('deu ruim'));
    }
}).then((resolucao) => {
    console.log(resolucao)
});
// OBS IMPORTANTE: O valor passado por parametro no THEN será o mesmo valor que já existe na função RESOLVE
console.log(promessa); 


const promessa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolvida em 1,5 segundos');
        }, 1500);
    }).then((resolucao) => {
        console.log(resolucao);
    });


    //O método THEN()Q retorna outra Promise. Podemos colocar THEN() após THEN()  e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior.
    const Promessa3 = new Promisse((resolve, reject) => {
        console.log(resolucao);
            return 'Etapa 1'; 
    }).then(resolucao => {
        console.log(resolucao);
            return 'Etapa 2';
    }).then(r => r + 4)
    .then(r => {
        console.log(r);
    });
