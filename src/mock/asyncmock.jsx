import Item from "../componentes/Item"
import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../componentes/ItemDetail"

const products = [
    {
        id: '01',
        name: 'Agenda Blanca Semanal',
        description: 'Agenda semana a la vista. Diseño Blanca',
        price: '20000',
        stock: '10',
        category: 'agendas',
        img: '../img/agendablanca.png',
    },

    {
        id: '02',
        name: 'Agenda Ela semanal',
        description: 'Agenda semana a la vista. Diseño Ela',
        price: '20000',
        stock: '10',
        category: 'agendas',
        img: '../img/agendaela.png',
    },
  
    {
        id: '03',
        name: 'Combo Agnes',
        description: 'Combo de Algarrobo. Tabla + Mate, diseño Agnes',
        price: '20000',
        stock: '10',
        category: 'combos',
        img: '../img/agnes.jpeg',
    },

    {
        id: '04',
        name: 'Combo Ela',
        description: 'Combo de Algarrobo. Mate + Azucarera/Yerbera, diseño Ela',
        price: '20000',
        stock: '10',
        category: 'combos',
        img: '../img/comboela.jpeg',
    },

    {
        id: '05',
        name: 'Imperial Ela',
        description: 'Mate Imperial de Algarrobo con Virola de Acero, diseño Ela',
        price: '20000',
        stock: '10',
        category: 'Mates Imperiales',
        img: '../img/imperialela.jpeg',
    },

    {
        id: '06',
        name: 'Imperial Mila',
        description: 'Mate Imperial de Algarrobo con Virola de Acero, diseño Mila',
        price: '20000',
        stock: '10',
        category: 'Mates Imperiales',
        img: '../img/imperialmila.jpeg',
    },

    {
        id: '07',
        name: 'Mate Gardenia',
        description: 'Mate de Acero Inoxidable, diseño Gardenia',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: '../img/mategardenia.jpeg',
    },

    {
        id: '08',
        name: 'Mate Megara',
        description: 'Mate de Acero Inoxidable, diseño Megara',
        price: '20000',
        stock: '10',
        category: 'Mates de Acero',
        img: "../img/megaraacero.jpeg",
    },
    {
        id: '09',
        name: 'Combo Tina',
        description: 'Combo de Algarrobo. Tabla + Mate, diseño Tina',
        price: '20000',
        stock: '10',
        category: 'combos',
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
        name: 'Agenda Lola Semanal',
        description: 'Agenda semanal, semana a la vista. Diseño Lola',
        price: '20000',
        stock: '10',
        category: 'agendas',
        img: "../img/agendalola.jpeg",
    },
    {
        id: '12',
        name: 'Imperial Lola',
        description: 'Mate Imperial de algarrobo, diseño Lola',
        price: '20000',
        stock: '10',
        category: 'Mates Imperiales',
        img: "../img/imperialola.png",
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            let product= products.find((item) => item.id === id)
            resolve(product)
        }, 1000)
    })
}