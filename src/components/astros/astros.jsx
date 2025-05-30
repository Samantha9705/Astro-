import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Astro from "../Astro/astro";

function Astros() {
    const [astro, setAstro] = useState([]);
    const URL = "http://api.open-notify.org/astros.json";

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const data = await response.json();
            setAstro(data.people);
        }

        getData();
    }, []);

    return (
        <>
            <Typography variant="h1">ASTROS</Typography>
            <div className="cardContainer">
                {astro.length > 0 ? (
                    astro.map((astroItem, index) => (
                        <Astro key={index} astro={astroItem} />
                    ))
                ) : (
                    <CircularProgress />
                )}
            </div>
        </>
    );
}

export default Astros;
