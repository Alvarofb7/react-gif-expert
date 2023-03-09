import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        // getGifs(category)
        //     .then(newImages => setImages(newImages));

        getImages();
        setIsLoading(false);
    }, [])

    return {
        // images: images, Si se llama igual el return se puede poner solo images
        images,
        isLoading
    }

}
