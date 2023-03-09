// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifts";

export const GifGrid = ({ category }) => {

    const {images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                // isLoading ? (<h2>Cargando...</h2>): null
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            { ...image } //Aqui esparcimos todas las props y evitamos estar haciendo title = image.title, url=image.url...
                        />
                    ))
                }
            </div>
        </>
    )
}
