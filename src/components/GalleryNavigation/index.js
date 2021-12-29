import {NavLink} from 'react-router-dom'
import './GalleryNavigation.css'


const GalleryNavigation = ({galleries}) => {
    console.log(galleries)
    return (
        <nav>
            <h1 className='blue'>Galleries</h1>
            <NavLink exact to={`/`}>Home</NavLink>
            {galleries.map((gallery) => (
                <span key={gallery.id} style={{ paddingRight: '10px' }}
                >
                    <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink> |
                </span>
            ))}

        </nav>
    )
}

export default GalleryNavigation;
