import { GetGifCard } from "./GetGifCards";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGriddAdd = function({categories}) {
    const {contain, isLoading} = useFetchGifs(categories);
    return (
        <>
        <h3>{categories}</h3>
        {isLoading  && <h2>Cargando...</h2>}
        <div className="card-grid"> 
            {contain.map((Element) => 
                <GetGifCard key={Element.id} {...Element}/>
             )}
        </div>
        </>
    )
}