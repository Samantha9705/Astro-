import './Astro.css'


function Astro(props){

    return(
        <>
        <div className='personDiv'>
            <h3>{props.astro.name}</h3>
            <h3>{props.astro.craft}</h3>
        </div>
        </>
    )
}

export default Astro;