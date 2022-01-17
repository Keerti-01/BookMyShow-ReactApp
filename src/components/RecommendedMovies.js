import {Carousel , Card , CardGroup} from 'react-bootstrap';


function RecommendedMovies() {
    return (
        
      <div style={{ background:"#0000", padding:"20px"}}>
        <h4 style={{marginTop:"80px"}}>Recommended Movies</h4>
        <Carousel indicators={false} slide={false}>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card className=" text-white" style={{height: "480px", width: "250px"}}>
                        <Card.Img src="./images/rm1.jpg" alt="Card image" style={{height: "400px", width: "250px"}} />
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                        <li class="list-group-item"><strong>Bangarraju</strong></li>
                            <li class="list-group-item">Comedy/Fantasy</li>
                            
                        </ul>
                        
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "2500px"}}>
                        <Card.Img src="./images/rm2.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>Rowdy Boys</strong></li>
                            <li class="list-group-item">Comedy/Drama/Romantic</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm3.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>Hero(2022)</strong></li>
                            <li class="list-group-item">Action/Drama/Romantic</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm4.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>Super Machi</strong></li>
                            <li class="list-group-item">Comedy/Drama/Romantic</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm5.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>The King's Man</strong></li>
                            <li class="list-group-item">Action/Adventure/Comedy</li>
                            
                        </ul>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
            <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm6.jpg" alt="Card image" style={{height: "400px", width: "250px"}} />
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>SpiderMan-No Way Home</strong></li>
                            <li class="list-group-item">Action/Adventure/Sci-fi</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm7.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>Pushpa:The Rise-Part 01</strong></li>
                            <li class="list-group-item">Action/Thriller</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm8.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                        <li class="list-group-item"><strong>Akhanda</strong></li>
                            <li class="list-group-item">Action/Drama</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm9.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>Shyam Singha Roy</strong></li>
                            <li class="list-group-item">Period/Supernatural/Thriller</li>
                            
                        </ul>
                    </Card>
                    <Card className=" text-white" style={{height: "470px", width: "250px"}}>
                        <Card.Img src="./images/rm10.jpg" alt="Card image" style={{height: "400px", width: "250px"}}/>
                        <ul class="list-group list-group-flush" style={{width:"250px"}}>
                            <li class="list-group-item"><strong>83</strong></li>
                            <li class="list-group-item">Drama/Sports</li>
                            
                        </ul>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>

        <div>
            <img src="./images/stream.png" style={{margin:"110px 20px 50px 20px",width:"95%"}}/>
        </div>
      </div>
    )
  };
      
  export default RecommendedMovies;
  