class ConsultarCep {
    constructor(){
        this.cep = document.getElementById("cep");
        this.req = new XMLHttpRequest();
        this.button = document.querySelector(".btn-search");
        this.logradouro = document.getElementById("logradouro");
        this.municipio = document.getElementById("municipio");
        this.bairro = document.getElementById("bairro");
        this.uf = document.getElementById("uf");
     
        this.enviarRequisicao();
    }

    enviarRequisicao(requisicao){
        this.button.addEventListener("click", () =>{
            requisicao = this.req;

            requisicao.open("GET", `https://viacep.com.br/ws/${this.cep.value}/json`, true);
     
            requisicao.onload = () => {
                let resposta = JSON.parse(requisicao.response);
                this.logradouro.value = resposta.logradouro;
                this.municipio.value = resposta.localidade;
                this.bairro.value = resposta.bairro;
                this.uf.value = resposta.uf;
            }
     
            requisicao.send();
            this.limparTela();
        });

    
    }

    limparTela(){
        this.cep.value = " "; 
    }
}

const cep = new ConsultarCep();