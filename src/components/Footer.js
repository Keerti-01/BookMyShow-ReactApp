import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function Footer() {
    return (
        <div style={{background:"rgb(249 248 248)",marginTop:"50px"}}>
            <h5 style={{padding: "30px 20px 0 40px",color:"rgb(143 139 139)"}}>Privacy Note</h5>
            <p style={{padding: " 0 20px 30px 40px",color:"rgb(143 139 139)"}}>By using www.bookmyshow.com(website), you are fully accepting the privacy policy available at 
                https://bookmyshow.com/privacy governing your access to BookMyShow and not accept terms mentioned
                in the Privacy Policy, you must not share any of your personal information and immediately exit
                BookMyShow.
            </p>
        
      <div style={{background:"rgb(64, 64, 67)", color:"rgb(204, 204, 204)"}}>
          <Container fluid>
              <Row style={{padding:"1%",paddingTop:"20px"}}>
                <Col xs={{offset:1, span:2 }} style={{marginLeft:"25px"}}>
                    <strong>List Your Show</strong>
                </Col>
                <Col xs={6} style={{width:"700px"}} >
                    Got a show,event,activity or a great experience? Partner with us and get listed on BookMyShow
                </Col>
                <Col xs={3} style={{display:"flex",flexDirection:"row-reverse"}}>
                    <Button href="/register" style={{background:"rgb(236,94,113)"}}>Contact Today!</Button>
                </Col>
              </Row>
              <Row style={{textAlign:"center",padding:"2%", color:"rgba(188, 192, 196, 0.74)",background:"rgb(105 105 106)"}}>
              <Col>
                    24/7 Customer Care
                </Col>
                <Col>
                    Resend Booking Confirmation
                </Col>
                <Col>
                    <i class="fas fa-envelope-open-text"></i>
                    Subscribe to Newsletter
                </Col>
              </Row>
              <Row style={{color:"rgb(188,192,196)",background:"rgb(71 71 72)",padding:"20px 0 0 20px"}}>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <p style={{fontSize:"13px"}}>MOVIES PLAYING IN HYDERABAD</p>
                    <p style={{fontSize:"13px"}}>Bangaraju | Rowdy Boys | Hero(2022) | Super Machi | The King's Man | Pushpa: The Rise part-1</p>
                </div>
                <div>
                    <hr style={{marginTop:"40px",marginBottom: "60px"}}></hr>
                </div>
                <div>
                <p style={{fontSize:"13px",textAlign:"center"}}> Copyright 2022 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved. </p>
                <p style={{fontSize:"13px",textAlign:"center"}}> The content and images used in this app are Copyright protected and copyright
                 vests with respective owners. The usage of images and content in this website are intended to promote the works and
                 no endorsement of the artists shall be implied. </p>
                 <p style={{fontSize:"13px",textAlign:"center"}}> Unauthorised use is prohibited and punishable by the law. </p>
                </div>


              </Row>
          </Container>

      </div>
      </div>
    )
  };

  export default Footer;