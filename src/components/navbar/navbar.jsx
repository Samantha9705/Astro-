
import './navbar.css'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Link } from 'react-router-dom';


function Navbar(props){
    const links = props.links;
    const textStyles = {
        color: "white",
        textDecoration: "underline"
    }

    const iconStyles = {
        width : "40px"
    }

    return(
        <>
            <nav style={{backgroundColor: "peru"}}>
                
                <div className='logos'>
                    <RocketLaunchIcon style={iconStyles}/>
                    <h2>Logo</h2>
                    <h2>SpaceApp</h2>
                </div>
                <div className='navigation'>
                    {
                        links.map(link =>
                            <button key={link.id}>

                                <Link to={link.url} style={textStyles}>{link.text}</Link>
                            </button>
                        )
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar;