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
                            required: true
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
                        },
                        uf: {
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
                    }
                });