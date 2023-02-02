const form = document.getElementById('form-atividade');
const emojiAprovado = '<td class="aprovado ">&#x1F606</td>';
const emojiReprovado = '<td class="reprovado ">&#x1F62D</td>';
const atividades = [];
const notas = [];

const notaMinima = parseFloat(prompt('Digite sua nota mínima aqui:'))

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert`A atividade ${inputNomeAtividade.value} ja foi inserida.`;
    }else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';

    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? 'Aprovado' : 'Reprovado ' }</td>`;

    linhas += linha;
}
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-resultado').innerHTML = mediaFinal
    document.getElementById('media-final').innerHTML = mediaFinal >= notaMinima ? 'Aprovado' : 'Reprovado'
}
function calculaMediaFinal(){

    let somaDasNotas = 0;

    for(i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]; 
    }
    return somaDasNotas / notas.length;
}