import { useState, useEffect, Fragment } from "react";

import AlbumsView from "./AlbumsView";

const AlbumsContainer = () => {
    const[dataAlbums, setDataAlbums] = useState([]),
    [loadingAlbums, setLoadingAlbums] = useState(true);

    const getDataAlbums = async() => {
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/albums")
        console.log("response", response);
        if(!response.ok){
            console.log("Hubo un error en la peticion");
        }

        const results = await response.json()
        setDataAlbums(results)
        }catch(error){
            console.log("Hubo un error en la api", error);
        }finally {
            setLoadingAlbums(false)
        }
    }

    console.log("dataAlbums", dataAlbums);

    useEffect(()=> {
        getDataAlbums()
    }, [])

return(
    <AlbumsView loadingAlbums={loadingAlbums} dataAlbums={dataAlbums} />
)
}

export default AlbumsContainer