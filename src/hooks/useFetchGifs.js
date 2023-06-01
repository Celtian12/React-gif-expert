import { useEffect, useState } from "react";
import { GetGif } from "../components/helpers/getGifs";


export const useFetchGifs = function(parCategories) {
    const [contain, setcontain] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async function() {
        const newImages = await GetGif(parCategories);
        setcontain(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();   
    }, [])


    return {
        contain,
        isLoading,
    }
}