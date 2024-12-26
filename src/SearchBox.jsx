import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import "./SearchBox.css";

function SearchBox({updateInfo}){
    let [movie,setMovie] = useState("");
    const API_URL = "http://www.omdbapi.com/?i=tt3896198";
    const API_KEY = "388f1440";
   

    let getMovieInfo = async() => {
        let response = await fetch(`${API_URL}&apikey=${API_KEY}&${movie}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            movie: movie,
            title: jsonResponse.Title,
            year: jsonResponse.Year,
            plot: jsonResponse.Plot,
        }
        console.log(result);
        return result;
    }

    let handleChange = (event) => {
        setMovie(event.target.value);
    };

    let handleSubmit = async(event) => {
        try{ 
         event.preventDefault();
         console.log(movie);
         setMovie("");
         let newInfo = await getMovieInfo();
         updateInfo(newInfo);
        }
        catch(err){
         setError(true);
        }
     };

    return(
        <div className="SearchBox">
         <h1>Search for the Movie</h1>
         <form onSubmit={handleSubmit}>
         <TextField id="movie" label="Enter Movie's Name" variant="outlined" value={movie} onChange={handleChange} required/>
          <br/>
          <br/>
         <Button variant="contained" type="submit">Search</Button>
         </form>
        </div>
    );
}

export default SearchBox;