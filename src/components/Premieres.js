import {Carousel , Card , CardGroup} from 'react-bootstrap';


function Premieres() {
    return (
        
      <div style={{ background:"rgb(47 51 74)", padding:"20px", paddingBottom:"150px"}}>

        <img src="./images/premiere.jpg" style={{width:"99%"}}/> 
        
        <h2 style={{color:"white",marginTop:"35px"}}>Premieres</h2>
        <Carousel>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p1.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p2.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p3.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p4.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card >
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p5.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p6.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p7.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p8.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p9.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                    <Card style={{height: "350px", width: "300px"}}>
                        <Card.Img variant="top" src="./images/p10.jpg" style={{height: "450px", width: "240px"}} />
                        <Card.Body>
                        
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
      </div>
    )
  };
      
  export default Premieres;
  