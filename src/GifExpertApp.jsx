import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categorias = ;

    const [categorias, setCategorias] = useState(['Rick & Morty']);

    // const handleAdd = () => {
    //     //setCategorias(cats => [...cats, 'Opcion 1 de agregar categorias']);
    //     setCategorias([...categorias, 'Opcion 2 de agregar categorias'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategorias }/>
            <hr />

            <ol>
                {
                    categorias.map((categoria) => (
                        <GifGrid key={ categoria } categoria={ categoria } />
                    ))
                }
            </ol>
        </>
    );
}