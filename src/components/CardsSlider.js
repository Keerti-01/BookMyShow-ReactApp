import {Carousel , Card , CardGroup} from 'react-bootstrap';


function CardsSlider() {
    return (
        
      <div style={{ background:"#0000", padding:"20px"}}>
        <h4>The Best Of Entertainment</h4>
        <Carousel indicators={false}>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e1.jpg" alt="Card image" style={{height: "300px", width: "240px"}} />
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e2.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e3.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e4.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e5.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e6.jpg" alt="Card image" style={{height: "300px", width: "240px"}} />
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e7.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e8.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e9.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "250px", width: "300px"}}>
                        <Card.Img src="./images/e10.jpg" alt="Card image" style={{height: "300px", width: "240px"}}/>
                        
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
      </div>
    )
  };
      
  export default CardsSlider;
  