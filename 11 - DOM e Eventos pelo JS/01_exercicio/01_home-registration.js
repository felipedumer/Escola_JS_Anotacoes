function salvarCasa() 
{
    let area = document.querySelector("input[name='area']").value;
    let numero = document.querySelector("input[name='numero']").value;
    let bairro = document.querySelector("input[name='bairro']").value;
    let cidade = document.querySelector("input[name='cidade']").value;

    let novaListaValores = document.createElement("li");
    novaListaValores.innerText = area + "m2,  Número" + numero + "Bairro: " + bairro + "Cidade: " + cidade;

    let botaoRemover = document.createElement("button")
    botaoRemover.type = "button";
    botaoRemover.innerText = "Remover";
    botaoRemover.setAttribute("onclick", "removerCasa(this)");

    novaListaValores.appendChild(botaoRemover);

    document.getElementById("lista-casas").appendChild(novaListaValores);
}

function removerCasa(button)
{
    let removerLi = button.parentNode;
    document.getElementById("lista-casas").removeChild(removerLi);
}