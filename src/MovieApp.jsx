import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";

function MovieApp(){
    let [movieInfo,setMovieInfo] = useState({
        movie: "Spider",
        title: "Spiderman",
        year: 2015,
        plot: "This is spiderman Plot",
    });

    let updateInfo = (newInfo) => {
        setMovieInfo(newInfo);
    }

    return(
        <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={movieInfo}/>
        </div>
    );
}

export default MovieApp;