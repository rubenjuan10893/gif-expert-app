import React, { Fragment } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const { data:imagenes, loading} = useFetchGifs(categoria);

    return (
        <Fragment>
            <h3>{ categoria }</h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                {
                    imagenes.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}
        