export const getGifs = async (categoria) => {
    console.log(categoria);
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=dyIWxO6JHYwyFUtlgtq52C66dQz6Y2fa`;
    const respuesta = await fetch(url);

    const { data } = await respuesta.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    return gifs;
}