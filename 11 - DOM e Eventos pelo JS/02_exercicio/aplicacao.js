class Aplicacao
{
    addPropriedade()
    {
        event.preventDefault();
        let tipo = document.querySelector("select[name='tipo'").value;
        let area = document.querySelector("input[name='area'").value;
        let alugado = document.querySelector("input[name='alugado'").checked;
        let propriedade = new Propriedade(tipo, area, alugado);
        this.addPropriedadeLista(propriedade);
        this.limparFormulario()
    }

    addPropriedadeLista(propriedade) 
    {
        let listaElemento = document.createElement("li");
        let propriedadeInfo = " Tipo :" + propriedade.tipo + " (Área: " +propriedade.area + "m2)";   
        if(propriedade.alugado)
        {
            let marcaAlugado = this.criarMarcaAlugado();
            listaElemento.appendChild(marcaAlugado);
        }
        listaElemento.innerHTML += propriedadeInfo;
        let botaoRemover = this.criarBotaoRemover();
        listaElemento.appendChild(botaoRemover);
        document.getElementById("propriedades").appendChild(listaElemento);
    }

    criarMarcaAlugado()
    {
        let marcaAlugado = document.createElement("span");
        marcaAlugado.style.color = "white";
        marcaAlugado.style.backgroundColor = "red";
        marcaAlugado.innerText = "ALUGADO";
        return marcaAlugado;
    }

    criarBotaoRemover()
    {
        let botaoRemover = document.createElement("button");
        botaoRemover.setAttribute("onclick", "app.remover()");
        botaoRemover.innerText = "Remover";
        return botaoRemover;
    }

    limparFormulario()
    {
        document.querySelector("input[name='area']").value = "";
        document.querySelector("input[name='alugado']").checked = false;
    }

    remover()
    {
        let liParaRemover = event.target.parentNode;
        document.getElementById("propriedades").removeChild(liParaRemover);
    }
}