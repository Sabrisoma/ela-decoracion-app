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
        price: '21700',
        stock: '3',
        category: 'agendas',
        img: '../img/agendablanca.png',
    },

    {
        id: '02',
        name: 'Agenda Ela semanal',
        description: 'Agenda semana a la vista. Diseño Ela',
        price: '21700',
        stock: '5',
        category: 'agendas',
        img: '../img/agendaela.png',
    },
  
    {
        id: '03',
        name: 'Combo Agnes',
        description: 'Combo de Algarrobo. Tabla + Mate, diseño Agnes',
        price: '16400',
        stock: '2',
        category: 'combos',
        img: '../img/agnes.jpeg',
    },

    {
        id: '04',
        name: 'Combo Ela',
        description: 'Combo de Algarrobo. Mate + Azucarera/Yerbera, diseño Ela',
        price: '18000',
        stock: '1',
        category: 'combos',
        img: '../img/comboela.jpeg',
    },

    {
        id: '05',
        name: 'Imperial Ela',
        description: 'Mate Imperial de Algarrobo con Virola de Acero, diseño Ela',
        price: '28000',
        stock: '4',
        category: 'matesimperiales',
        img: '../img/imperialela.jpeg',
    },

    {
        id: '06',
        name: 'Imperial Mila',
        description: 'Mate Imperial de Algarrobo con Virola de Acero, diseño Mila',
        price: '28000',
        stock: '4',
        category: 'matesimperiales',
        img: '../img/imperialmila.jpeg',
    },

    {
        id: '07',
        name: 'Mate Gardenia',
        description: 'Mate de Acero Inoxidable, diseño Gardenia',
        price: '17200',
        stock: '3',
        category: 'matesdeacero',
        img: '../img/mategardenia.jpeg',
    },

    {
        id: '08',
        name: 'Mate Megara',
        description: 'Mate de Acero Inoxidable, diseño Megara',
        price: '17200',
        stock: '2',
        category: 'matesdeacero',
        img: "../img/megaraacero.jpeg",
    },
    {
        id: '09',
        name: 'Combo Tina',
        description: 'Combo de Algarrobo. Tabla + Mate, diseño Tina',
        price: '15200',
        stock: '2',
        category: 'combos',
        img: "../img/tina.jpeg",
    },
    {
        id: '10',
        name: 'Mate Amanda',
        description: 'Mate de Acero Inoxidable, diseño Amanda',
        price: '17200',
        stock: '2',
        category: 'matesdeacero',
        img: "../img/aceroamanda.jpeg",
    },
    {
        id: '11',
        name: 'Agenda Lola Semanal',
        description: 'Agenda semanal, semana a la vista. Diseño Lola',
        price: '21700',
        stock: '2',
        category: 'agendas',
        img: "../img/agendalola.jpeg",
    },
    {
        id: '12',
        name: 'Imperial Lola',
        description: 'Mate Imperial de algarrobo, diseño Lola',
        price: '28000',
        stock: '3',
        category: 'matesimperiales',
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