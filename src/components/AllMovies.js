
import {Carousel} from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
const axios = require('axios').default;


function AllMovies(){

    const[data , setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:8000/movies');
            console.log(response);
            setData(response.data);
            
          } catch (error) {
            console.error(error);
          }

    }, []);

    
    return(
        <div>
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/movies1.png"
                    alt="First slide"
                    
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./images/movies2.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>

        <h3 style={{margin:"40px 0 30px 0",padding:"30px 20px 10px 60px"}}><strong>Movies</strong></h3>

            <Container fluid style={{padding:"5%",background:"rgb(249 248 248)"}}>
                <Row style={{textAlign:"center"}}>
                    { data.map((mov) => 
                    <Col key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{cursor:"pointer"}} onClick={() => window.location.href="/movies/"+mov._id } style={{height: "450px", width: "250px"}}>
                            <Card.Img variant="top" src={mov.img} style={{height: "370px", width: "250px"}}/>
                            <Card.Body>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                                {mov.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}   
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



export default AllMovies;

/*function AllMovies(){
    console.log(data);
    return(
        <div>
            <Container fluid style={{padding:"5%",background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    { data.map((mov) => 
                    <Col key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card style={{cursor:"pointer"}} onClick={() => window.location.href="/movies/"+mov.id }>
                            <Card.Img variant="top" src={mov.img} />
                            <Card.Body>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                                {mov.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )}   
                </Row>
            </Container>
        </div>
    )
}*/