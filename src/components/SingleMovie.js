import { Card } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from 'react-bootstrap';
import axios from "axios";
import { useParams } from "react-router-dom";
import {useEffect , useState} from "react";




function SingleMovie(){
    const {movid} = useParams();
    const [singledata , setSingleData] = useState([]);
    
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:8000/movie/${movid}`); //concatenate
            console.log(response);
            setSingleData([response.data]);
            
          } catch (error) {
            console.error(error);
          }

    }, []);

    return(
        <div>
            
            
            <Container fluid style={{background:"rgb(249 248 248)",padding:"0 0 0 0"}}>
                <Row style={{textAlign:"center"}}>
                    { singledata.map((mov) => {
                        return(
                        <Col key={mov._id}  style={{marginBottom:"5%"}}>
                            <Card style={{background: "linear-gradient(260deg,rgb(51, 53, 69),rgb(249 248 248))"
                                
                        }}>
                                <Card.Img variant="top" src={mov.img} style={{
                                width:"40%",
                                height:"500px",marginLeft:"700px"
                                
                                }} />
                                
                                <Card.ImgOverlay style={{marginRight:"730px",marginTop:"100px"}}>
                                    <Card.Title style={{fontSize:"50px"}}>{mov.title}</Card.Title>
                                    <Card.Text>
                                    <Button variant="danger" style={{marginTop:"50px"}}>Book Tickets</Button> 
                                   
                                    </Card.Text>
                                    <Card.Text><strong>2h 40m | Comedy/Fantasy | UA</strong></Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <div style={{padding:"50px 0 30px 40px",background:"rgb(250 248 248)"}}>
                                <h4>About The Movie</h4>
                                <p style={{padding:"10px 30px 20px 30px"}}>{mov.description}</p>
                            </div>
                            
                        </Col>
                        )
                        
                    })}

                    
                </Row>
            </Container>
            <div style={{background:"rgb(249 248 248)",marginTop:"50px"}}>
            <h5 style={{padding: "30px 20px 0 40px",color:"rgb(143 139 139)"}}>
                Easy Online Ticket Booking For Movies with BookMyShow
            </h5>
            <p style={{padding: " 0 20px 30px 40px",color:"rgb(143 139 139)"}}>If you are planning for <strong> movie ticket 
                bookings</strong> with BookMyShow. Your one-stop solution for movies to watch this weekend. Everyone 
            enjoys watching their favorite movies on the big screen, and the excitement of watching it 
            with friends is unparalleled. If you have been eagerly waiting for a movie that you can watch with
             your friends and family, now you know where to get the tickets from. When you watch a film in a cinema 
             theatre, you get to watch it on a massive screen with surround-sound, and that 
            enhances your movie-watching experience. Thus, allowing you to be a part of the actual movie. Get to know  
            about <strong>All movies</strong> and  <strong>Movie Trailers</strong> to watch here. Also, 
            know <strong>how to book movie tickets</strong> .
            </p>
            </div>
            
        </div>
    )
}

export default SingleMovie;

// function SingleMovie(){
//     const {movid} = useParams();
//     console.log(movid);
//     return(
//         <div>
//             <Container fluid style={{padding:"5%",background:"pink"}}>
//                 <Row style={{textAlign:"center"}}>
//                     { data.map((mov) => {
//                         if(mov.id==movid) {
//                             return(
//                                 <Col key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
//                                 <Card>
//                                     <Card.Img variant="top" src={mov.img} />
//                                     <Card.Body>
//                                     <Card.Title>{mov.title}</Card.Title>
//                                     <Card.Text>
//                                         {mov.actor}
//                                     </Card.Text>
//                                     </Card.Body>
//                                 </Card>
//                                 </Col>
//                             )
                    
//                         }
//                     }   )}   
//                 </Row>
//             </Container>
//         </div>
//     )
// }