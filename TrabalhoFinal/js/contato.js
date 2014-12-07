 $(".form-horizontal").validate({
    rules: {
        //Atributo name
        nome: {
            required: true
        },
        cpf: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
            tel: true
        },
        endereco: {
            required: true
        },
        numero: {
            required: true
        },
        bairro: {
            required: true
        },
        cidade: {
            required: true
        }
    },
    messages: {
        nome: {
            required: "Informe um valor no campo Nome!"
        },
        email: {
            required: "Informe um valor no campo Email!",
            email: "Digite um e-mail válido!"
        },
        cpf: {
            required: "Informe um valor no campo CPF!"
        },
        telefone: {
            required: "Informe um valor no campo Telefone!",
            tel: "Digite um número de telefone válido!"
        },
        endereco: {
            required: "Informe um endereço válido!"
        },
        numero: {
            required: "Informe um valor no campo Número!"
        },
        bairro: {
            required: "Informe um bairro válido!"
        },
        cidade:{
            required: "Informe uma cidade válida!"
        }
    }
});