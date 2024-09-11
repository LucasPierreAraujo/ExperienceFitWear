export function memory() {
    const produtos = [
        {
            id: 1,
            nome: 'EnergiaFit',
            descricao: 'Disponível na cor Preto, Tamanho G.',
            imagem: '/energiafit.jpeg',
            valor: 42.00
        },
        {
            id: 2,
            nome: 'Circuit',
            descricao: 'Disponível nas cores Preto e Telha, tamanho M.',
            imagem: '/circuit.jpeg',
            valor: 135.00
        },
        {
            id: 3,
            nome: 'Fitrevolution',
            descricao: 'Disponível na cor Verde, tamanho G e na cor Laranja tamanho M.',
            imagem: '/fitrevolution.jpeg',
            valor: 115.00
        },
        {
            id: 4,
            nome: 'FlexFlow',
            descricao: 'Disponível na cor Azul Céu, tamanho M.',
            imagem: '/flexflow.jpeg',
            valor: 120.00
        },
        {
            id: 5,
            nome: 'GymWarriors',
            descricao: 'Disponível na cor Azul Piscina, tamanho M e na cor Tomate, tamanho G.',
            imagem: '/gymwarriors.jpeg',
            valor: 135.00
        },
        {
            id: 6,
            nome: 'MuscleTone',
            descricao: 'Disponível na cor Vinho Bordô, tamanho G',
            imagem: '/muscletone.jpeg',
            valor: 160.00
        },
        {
            id: 7,
            nome: 'ZenithWarriors',
            descricao: 'Disponível na cor Verde, tamanho G.',
            imagem: '/zenithwarriors.jpeg',
            valor: 135.00
        },
        {
            id: 8,
            nome: 'Boost',
            descricao: 'Disponível na cor Verde claro, tamanho P.',
            imagem: '/boost.jpeg',
            valor: 135.00
        },
        {
            id: 9,
            nome: 'ActiveAura',
            descricao: 'Disponível na cor Fuscia, tamanhos M e G.',
            imagem: '/activeaura.jpeg',
            valor: 135.00
        },
        {
            id: 10,
            nome: 'Blow',
            descricao: 'Disponível na cor Verde claro / Verme mititar, tamanho M.',
            imagem: '/BLOW.jpeg',
            valor: 140.00
        },
        {
            id: 11,
            nome: 'EliteMove',
            descricao: 'Disponível na cor Verde Militar tamanho G e cor Off no tamanho M.',
            imagem: '/ELITEMOVE.jpeg',
            valor: 120.00
        },
        {
            id: 12,
            nome: 'FitPro',
            descricao: 'Disponível na cor Marinho / Azul claro, tamanho M.',
            imagem: '/FITPRO.jpeg',
            valor: 110.00
        },
        {
            id: 13,
            nome: 'Fitibre',
            descricao: 'Disponível na cor Marrom / Off, tamanho M.',
            imagem: '/FITVIBRE.jpeg',
            valor: 110.00
        },
        {
            id: 14,
            nome: 'Movement',
            descricao: 'Disponível na cor Marinho / Marrom / Bege, tamanho M.',
            imagem: '/MOVEMENT.jpeg',
            valor: 120.00
        },
        {
            id: 15,
            nome: 'Macaquinho Sprinter',
            descricao: 'Disponível na cor Telha, tamanho M.',
            imagem: '/SPRINTER.jpeg',
            valor: 120.00
        }
    ];

    const saladaMontada = {
        nome: 'Monte Sua salada!',
        descricao: 'Do seu jeito!',
        valorInicial: 50.00,
        grupoAdicional: [
            {
                grupoAdicional: 'Proteina',
                quantidadeMaxima: 1,
                quantidadeMinima: 1,
                itens: [
                    {
                        nome: 'Frango desfiado',
                        imagem: 'url',
                        valor: 3.90  
                    },
                    {
                        nome: 'Frango grelhado em lascas',
                        imagem: 'url',
                        valor: 3.90  
                    },
                    {
                        nome: 'Carne de sol',
                        imagem: 'url',
                        valor: 7.90  
                    },
                    {
                        nome: 'Presunto parma',
                        imagem: 'url',
                        valor: 9.90  
                    },
                    {
                        nome: 'Camarão grelhado',
                        imagem: 'url',
                        valor: 12.90  
                    },
                    {
                        nome: 'Salmão grelhado',
                        imagem: 'url',
                        valor: 15.90  
                    }
                ]
            },
            {
                grupoAdicional: 'Toppins',
                quantidadeMaxima: 3,
                quantidadeMinima: 2,
                itens: [
                    {
                        nome: 'Tomate cereja',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Castanha caramelizada',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Castanha do pará',
                        imagem: 'url',
                        valor: 2.00  
                    },
                    {
                        nome: 'Nozes',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Queijo parmesão em lascas',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'quejo grelhado em cubos',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Queijo ricota em cubos',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Rúcula',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Picles de cenoura',
                        imagem: 'url',
                        valor: 1.00  
                    }
                ]
            },
            {
                grupoAdicional: 'Molhos',
                quantidadeMaxima: 1,
                quantidadeMinima: 1,
                itens: [
                    {
                        nome: 'Mostarda e mel',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Mostarda picante',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    // {
                    //     nome: 'Guacamole',
                    //     imagem: 'url',
                    //     valor: 2.00  
                    // },
                    {
                        nome: 'Iogurte com hortelã',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Maracujá',
                        imagem: 'url',
                        valor: 1.00  
                    }
                ]
            },
            {
                grupoAdicional: 'Talher',
                quantidadeMaxima: 1,
                quantidadeMinima: 0,
                itens: [
                    {
                        nome: 'Sim',
                        imagem: 'url',
                        valor: 1.00  
                    },
                    {
                        nome: 'Não',
                        imagem: 'url',
                        valor: 0.00  
                    }
                ]
            }
        ]
    };
    


    const proteinas = [
        {
            id: 1,
            nome: 'Carne de sol',
            descricao: '80g',
            imagem: '/Proteinacarnedesol.jpeg',
            valor: 8.00
        },
        {
            id: 2,
            nome: 'Frango desfiado',
            descricao: '80g',
            imagem: '/Proteinafrangodesfiado.jpeg',
            valor: 8.00
        },
        {
            id: 3,
            nome: 'Frango grelhado em lascas',
            descricao: '80g',
            imagem: '/Proteinafrangoemlascas.jpeg',
            valor: 8.00
        },
        {
            id: 4,
            nome: 'Presunto parma',
            descricao: '80g',
            imagem: '/Proteinapresuntoparma.jpeg',
            valor: 12.00
        },
        // {
        //     id: 5,
        //     nome: 'Camarão',
        //     descricao: '80g',
        //     imagem: '/Proteinacarnedesol.jpeg',
        //     valor: 8.00
        // },
        {
            id: 6,
            nome: 'Salmão gravilax',
            descricao: '80g',
            imagem: '/Proteinasalmao.jpeg',
            valor: 16.00
        },
    ];
    const molhos = [
        {
            id: 1,
            nome: 'Mostarda e mel',
            descricao: 'Mostarda, mel, sal e pimenta',
            imagem: '/mostardaemel.jpeg',
            valor: 3.00
        },
        {
            id: 2,
            nome: 'Mostarda picante',
            descricao: 'Mostarda, mostarda dijon, maionese',
            imagem: '/mostardapicante.jpeg',
            valor: 3.00
        },
        {
            id: 3,
            nome: 'Iogurte com hortelã',
            descricao: 'Iogurte natural, hortelã, azeite e sal',
            imagem: '/iogurtehortela.jpeg',
            valor: 3.00
        },
        // {
        //     id: 4,
        //     nome: 'Guacamole',
        //     descricao: 'Abacate, limão siciliano, cebola roxa, coentro, azeite, sal e pimenta',
        //     imagem: '/Guacamole.jpeg',
        //     valor: 7.00
        // },
        // {
        //     id: 5,
        //     nome: 'Caesar',
        //     descricao: '50ml',
        //     imagem: '/Caesar.jpeg',
        //     valor: 2.50
        // },
        {
            id: 6,
            nome: 'Maracujá',
            descricao: 'Maracujá, azeite, açúcar, sal e pimenta',
            imagem: '/molhomaracuja.jpeg',
            valor: 3.00
        },
        {
            id: 7,
            nome: 'Pesto',
            descricao: 'Azeite, manjericão, castanha de caju, parmesão, sal e pimenta',
            imagem: '/Molhopesto.jpeg',
            valor: 3.00
        }
    ];    

    const extras = [
        // {
        //     id: 1,
        //     nome: 'Morango',
        //     imagem: '/Morango.jpeg',
        //     valor: 0
        // },
        // {
        //     id: 2,
        //     nome: 'Pepino',
        //     imagem: '/Pepino.jpeg',
        //     valor: 0
        // },
        // {
        //     id: 3,
        //     nome: 'Tomate cereja',
        //     imagem: '/Tomatecereja.jpeg',
        //     descricao: '',
        //     valor: 2.50
        // },
        // {
        //     id: 4,
        //     nome: 'Queijo coalho',
        //     imagem: '/Queijoo.jpeg',
        //     descricao: '',
        //     valor: 4.50
        // },
        // {
        //     id: 5,
        //     nome: 'Lascas de parmesão',
        //     imagem: '/Queijoo.jpeg',
        //     descricao: '',
        //     valor: 4.50
        // },
        // {
        //     id: 6,
        //     nome: 'Castanha de caju caramelizada',
        //     imagem: '/Castanhacaramelizada.jpeg',
        //     descricao: '',
        //     valor: 4.50
        // },
        // {
        //     id: 7,
        //     nome: 'Castanha do pará',
        //     imagem: '/Castanha.jpeg',
        //     descricao: '',
        //     valor: 6.00
        // },
        // {
        //     id: 8,
        //     nome: 'Nozes',
        //     imagem: '/Nozes.jpeg',
        //     descricao: '',
        //     valor: 2.50
        // },
        // {
        //     id: 9,
        //     nome: 'Picles de cenoura',
        //     imagem: '/Piclescenoura.jpeg',
        //     valor: '0'
        // },
        // {
        //     id: 10,
        //     nome: 'Croutons',
        //     imagem: '/Croutons.jpeg',
        //     valor: '0'
        // },
        // {
        //     id: 11,
        //     nome: 'Rúcula',
        //     imagem: '/Croutons.jpeg',
        //     descricao: '',
        //     valor: 3.00
        // },
        {
            id: 12,
            nome: 'Croutons',
            imagem: '/Croutons.jpeg',
            descricao: '25g',
            valor: 3.90
        }
    ];

    const bairros = [
        {
            bairro: 'Combinar',
            frete: 0
        }
    ];

    const sucos = [
        {
            id: 1,
            nome: 'Laranja',
            descricao: '300ml, sem açúcar.',
            imagem: '/Laranja.jpeg',
            valor: 8.00
        },
        // {
        //     id: 2,
        //     nome: 'Laranja com morango',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Laranjamorango.jpeg',
        //     valor: '9,90'
        // },
        // {
        //     id: 3,
        //     nome: 'Cajá',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Caja.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 4,
        //     nome: 'Acerola',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Acerola.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 5,
        //     nome: 'Abacaxi com hortelã',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Abacaxihortela.jpeg',
        //     valor: '7,90'
        // },
        // {
        //     id: 6,
        //     nome: 'Detox (Couve, beterraba e gengibre)',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'url_da_imagem_salada1.jpg',
        //     valor: 0
        // },
        // {
        //     id: 7,
        //     nome: 'Maracujá',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: '/Maracuja.jpeg',
        //     valor: '9,90'
        // }
    ];

    const bebidas = [
        {
            id: 1,
            nome: 'Coca cola lata',
            descricao: '350ml',
            imagem: '/Cocacola.jpeg',
            valor: 6.90
        },
        {
            id: 2,
            nome: 'Coca cola zero lata',
            descricao: '350ml',
            imagem: '/Cocacolazero.jpeg',
            valor: 6.90
        },
        {
            id: 3,
            nome: 'Guaraná antartica lata',
            descricao: '350ml',
            imagem: '/Guarana.jpeg',
            valor: 6.90
        },
        {
            id: 4,
            nome: 'Guaraná antartica zero lata',
            descricao: '350ml',
            imagem: '/Guaranazero.jpeg',
            valor: 6.90
        },
        {
            id: 5,
            nome: 'Sprite lata',
            descricao: '350ml',
            imagem: '/Sprite.jpeg',
            valor: 6.90
        },
        // {
        //     id: 6,
        //     nome: 'Bebida lactea com proteina',
        //     descricao: 'Mix de folhas, salmão gravlax (100g), nozes, tomate cereja, queijo parmesão',
        //     imagem: 'url_da_imagem_salada1.jpg',
        //     valor: 0
        // },
        {
            id: 7,
            nome: 'Água mineral sem gás',
            descricao: '500ml',
            imagem: '/Agua.jpeg',
            valor: 5.00
        },
        {
            id: 8,
            nome: 'Água mineral com gás',
            descricao: '500ml',
            imagem: '/Aguagas.jpeg',
            valor: 6.00
        }
    ];
    

    return {
        produtos,
        saladaMontada,
        proteinas,
        molhos,
        bairros,
        sucos,
        bebidas,
        extras
    };
}
