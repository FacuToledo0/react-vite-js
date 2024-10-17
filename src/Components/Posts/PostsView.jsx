import { Fragment } from "react"
import { ProgressSpinner } from "primereact/progressspinner"

const PostsView = ({loadingPosts, dataPosts}) => {
return(
    <Fragment>
        {loadingPosts ? 
        <ProgressSpinner/>
        : 
            dataPosts.map((posts) =>(
                <div key={posts.id}>
                    <h3>Título: {posts.title}</h3>
                    <h3>Cuerpo: {posts.body}</h3>
                </div>
            ))
        }
    </Fragment>
)
}
export default PostsView