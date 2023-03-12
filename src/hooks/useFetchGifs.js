import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    console.log(`Haciendo fetch de la categoria ${category}`);

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
        console.log(`Obteniendo imagenes de la categoria ${category}`);
    }

    useEffect(() => {
        // getGifs(category)
        //     .then(newImages => setImages(newImages));
        getImages();
    }, [])

    return {
        // images: images, Si se llama igual el return se puede poner solo images
        images,
        isLoading
    }

}
