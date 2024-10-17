import { useState, useEffect, Fragment } from "react";
import { ProgressSpinner } from 'primereact/progressspinner';
import PostsView from "./PostsView";

const PostsContainer = () => {
    const[dataPosts, setDataPosts] = useState([]),
    [loadingPosts, setLoadingPosts] = useState(true);

    const getDataPosts = async() => {
        try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log("response", response);
        if(!response.ok){
            console.log("Hubo un error en la peticion");
        }

        const results = await response.json()
        setDataPosts(results)
        }catch(error){
            console.log("Hubo un error en la api", error);
        }finally {
            setLoadingPosts(false)
        }
    }

    console.log("dataPosts", dataPosts);

    useEffect(()=> {
        getDataPosts()
    }, [])

return(
    <PostsView loadingPosts={loadingPosts} dataPosts={dataPosts} />
)
}

export default PostsContainer