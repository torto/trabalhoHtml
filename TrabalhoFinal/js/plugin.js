$(document).ready(function() {
    var body = document.getElementById('pagina-dinamica');
    var trocaPaginaVar = {
        corpo: body
    };

    telaInicial(trocaPaginaVar);

	//metodo do callback
    trocaPaginaVar.sucess = function() {
    	//drop menu 
        $('.dropdown-menu li a ').on('click', function() {
            trocaPaginaVar.url = this.dataset.pagina
            trocarPagina(trocaPaginaVar);
        });

        //botoes de lista de produtos tela inicial
        $('.caption p a ').on('click', function() {
            trocaPaginaVar.url = this.dataset.pagina
            trocarPagina(trocaPaginaVar);
        });

		// logo tela inicial
        $('.navbar-brand').on('click', function() {
            telaInicial(trocaPaginaVar);
        });

    }

});


function trocarPagina(variavel) {
    $.get(variavel.url + ".html").done(function(data) {
    	//.done executa apos terminado toda a transferencia do arquivo
    	// eh um metodo asincrono
        var corpo = variavel.corpo;
        corpo.innerHTML = data;
        if (typeof variavel.sucess !== "undefined") {
            // callback para executar somente quando todo o dado estiver inserido
            //caso não tenha ele não iria encontrar os elementos na tela;
            variavel.sucess();
        }
    });
}

function telaInicial(variavel) {
    variavel.url = "principal";
    trocarPagina(variavel);
}