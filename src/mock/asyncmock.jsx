const products = [
    {
        id: '1',
        name: 'Agenda Blanca Semanal',
        description: 'Agenda semana a la vista. Diseño Blanca',
        price: '20000',
        stock: '10',
        category: 'agendas',
        img: '../img/agendablanca.png',
    },

    {
        id: '2',
        name: 'Agenda Ela semanal',
        description: 'Agenda semana a la vista. Diseño Ela',
        price: '20000',
        stock: '10',
        category: 'agendas',
        img: '../img/agendaela.png',
    },
  
    {
        id: '3',
        name: 'Combo Agnes',
        description: 'Combo de Algarrobo. Tabla + Mate, diseño Agnes',
        price: '20000',
        stock: '10',
        category: 'combos',
        img: '../img/agnes.jpeg',
    },

    {
        id: '4',
        name: 'Combo Ela',
        description: 'Combo de Algarrobo. Mate + Azucarera/Yerbera, diseño Ela',
        price: '20000',
        stock: '10',
        category: 'combos',
        img: '../img/comboela.jpeg',
    },

    {
        id: '5',
        name: 'Imperial Ela',
        description: 'Mate Imperial de Algarrobo con Virola de Acero, diseño Ela',
        price: '20000',
        stock: '10',
        category: 'Mates Imperiales',
        img: '../img/imperialela.jpeg',
    },

    {
        id: '6',
        name: 'Imperial Mila',
        description: 'Mate Imperial de Algarrobo con Virola de Acero, diseño Mila',
        price: '20000',
        stock: '10',
        category: 'Mates Imperiales',
        img: '../img/imperialmila.jpeg',
    },

    {
        id: '7',
        name: 'Mate Gardenia',
        description: 'Mate de Acero Inoxidable, diseño Gardenia',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: '../img/mategardenia.jpeg',
    },

    {
        id: '8',
        name: 'Mate Megara',
        description: 'Mate de Acero Inoxidable, diseño Megara',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: "../img/megaraacero.jpeg",
    },
    {
        id: '9',
        name: 'Combo Tina',
        description: 'Combo de Algarrobo. Tabla + Mate, diseño Tina',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: "../img/tina.jpeg",
    },
    {
        id: '10',
        name: 'Mate Amanda',
        description: 'Mate de Acero Inoxidable, diseño Amanda',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: "../img/aceroamanda.jpeg",
    },
    {
        id: '11',
        name: 'Mate Megara',
        description: 'Mate de Acero Inoxidable, diseño Megara',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: "../img/megaraacero.jpeg",
    },
    {
        id: '12',
        name: 'Mate Megara',
        description: 'Mate de Acero Inoxidable, diseño Megara',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: "../img/megaraacero.jpeg",
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    })
}