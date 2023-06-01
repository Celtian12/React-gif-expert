import { GifGriddAdd } from "../GifGrid";


export const GetGif = async function(valueCategories) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Jc1iagnF7GEXK6fISn9vfJ5m2keTtdOi&q=${valueCategories}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(Element => ({
        id: Element.id,
        title: Element.title,
        url: Element.images.downsized_medium.url
        })
    )
        return gifs;
}