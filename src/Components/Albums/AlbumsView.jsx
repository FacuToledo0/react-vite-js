import { Fragment } from "react"
import { ProgressSpinner } from "primereact/progressspinner"

const AlbumsView = ({loadingAlbums, dataAlbums}) => {
return(
    <Fragment>
        {loadingAlbums ? 
        <ProgressSpinner/>
        : 
            dataAlbums.map((album) =>(
                <div key={album.id}>
                    <h3>Título: {album.title}</h3>
                </div>
            ))
        }
    </Fragment>
)
}
export default AlbumsView