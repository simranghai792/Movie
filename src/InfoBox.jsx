import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

function InfoBox({info}){
    const INIT_URL = "https://img.freepik.com/free-photo/close-up-girl-looking-through-clapper-board_23-2147883133.jpg?semt=ais_hybrid";


    return(
        <div className="InfoBox">
           
           <br/>
         <div className="CardContainer">
         <Card>
            <CardMedia  
              sx={{ height: 140 }}
              image={INIT_URL}
              title="green iguana"/>

           <CardContent>  
            <Typography gutterBottom variant="h5" component="div">
              {info.movie}
            </Typography>

            <Typography variant="body2" color="text:secondary">
                 <div>Title: {info.title}</div>
                 <div>Year: {info.year}</div>
                 <div>Plot: {info.plot}</div>
            </Typography>
           </CardContent> 
            
         </Card> 
         </div>
        </div>
    );
}

export default InfoBox;