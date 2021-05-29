import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './NavBar'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@material-ui/lab/Rating";
import Modal from 'react-bootstrap/Modal';


export default function ReviewPage() {
  

  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
    <Navbar> </Navbar>

     <div style={{ marginLeft: "20px", marginTop: "5%" }}>
      
      <h3>
        search results <strong>"Philips One Blade"</strong>
      </h3>
      <div style={{ marginTop: "20px" }}>
        <h6>Recent Product List</h6>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button variant="primary" style={{ borderRadius: "10px" }} onClick={() => setLgShow(true)}>
          Most Viewed
        </Button>
        <Button
          variant="default"
          style={{
            borderRadius: "10px",
            marginLeft: "20px",
            backgroundColor: "lightgrey"
          }}
        >
          Top rated
        </Button>
        <Button
          variant="default"
          style={{
            borderRadius: "10px",
            marginLeft: "20px",
            backgroundColor: "lightgrey"
          }}
        >
          Recent
        </Button>

        <Button
          variant="primary"
          style={{
            borderRadius: "10px",
            float: "right",
            marginRight: "85px"
          }}
        >
          Add Product
        </Button>
      </div>

      <div style={{ display: "flex", marginTop: "20px", width: "100%" }}>
        <div>
          <div style={{ marginTop: "20px" }}>
            <Card style={{ width: "29rem", height: "15rem" }}>
              <Card.Body>
                
                <div>
                  <img
                    src="https://images.beardtrimmer.biz/l-m/virtually-indestructible-haircut-beard-trimmer-15-piece-v-2633741611.jpg"
                    style={{ width: "20%", color: "gray" }}
                  />
                  <h6 style={{ float: "right", color: "gray" }}>05:00pm</h6>
                  <div style={{ position: "absolute", top: "2rem" }}>
                    <h5 style={{ paddingLeft: "90px" }}>Value For Many</h5>
                    <div style={{ display: "flex", paddingLeft: "90px" }}>
                      <h6 style={{ color: "gray" }}>Product Name : </h6>
                      <h6>Philipe One Blade</h6>
                    </div>
                    <Rating
                      style={{ paddingLeft: "90px" }}
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                </div>
                <div />

                <div style={{ marginTop: "20px" }}>
                  <Button
                    variant="primary"
                    style={{ borderRadius: "8px", width: "30%" }}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      marginLeft: "20px",
                      width: "30%"
                    }}
                  >
                    Review
                  </Button>
                  <Button
                    variant="default"
                    style={{
                      borderRadius: "8px",
                      marginLeft: "20px",
                      width: "30%",
                      backgroundColor: "lightgrey"
                    }}
                  >
                    Delete
                  </Button>

                  <div>
                    <Button
                      variant="default"
                      style={{
                        borderRadius: "8px",

                        width: "100%",
                        marginTop: "20px",
                        backgroundColor: "lightgrey"
                      }}
                    >
                      Unpublished
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div>
          <div style={{ marginTop: "20px" }}>
            <Card
              style={{ width: "29rem", height: "15rem", marginLeft: "20px" }}
            >
              <Card.Body>
                
                <div>
                  <img
                    src="https://images.beardtrimmer.biz/l-m/virtually-indestructible-haircut-beard-trimmer-15-piece-v-2633741611.jpg"
                    style={{ width: "20%", color: "gray" }}
                  />
                  <h6 style={{ float: "right", color: "gray" }}>05:00pm</h6>
                  <div style={{ position: "absolute", top: "2rem" }}>
                    <h5 style={{ paddingLeft: "90px" }}>Awesome</h5>
                    <div style={{ display: "flex", paddingLeft: "90px" }}>
                      <h6 style={{ color: "gray" }}>Product Name : </h6>
                      <h6> Philipe One Blade</h6>
                    </div>
                    <Rating
                      style={{ paddingLeft: "90px" }}
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                </div>
                <div />

                <div style={{ marginTop: "20px" }}>
                  <Button
                    variant="primary"
                    style={{ borderRadius: "8px", width: "30%" }}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      marginLeft: "20px",
                      width: "30%"
                    }}
                  >
                    Review
                  </Button>
                  <Button
                    variant="default"
                    style={{
                      borderRadius: "8px",
                      marginLeft: "20px",
                      width: "30%",
                      backgroundColor: "lightgrey"
                    }}
                  >
                    Delete
                  </Button>

                  <div>
                    <Button
                      variant="default"
                      style={{
                        borderRadius: "8px",
                        textAlign: "center",

                        width: "100%",
                        marginTop: "20px",
                        backgroundColor: "lightgrey"
                      }}
                    >
                      Unpublished
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div>
          <div style={{ marginTop: "20px" }}>
            <Card
              style={{ width: "29rem", height: "15rem", marginLeft: "20px" }}
            >
              <Card.Body>
                
                <div>
                  <img
                    src="https://images.beardtrimmer.biz/l-m/virtually-indestructible-haircut-beard-trimmer-15-piece-v-2633741611.jpg"
                    style={{ width: "20%", color: "gray" }}
                  />
                  <h6 style={{ float: "right", color: "gray" }}>05:00pm</h6>
                  <div style={{ position: "absolute", top: "2rem" }}>
                    <h5 style={{ paddingLeft: "90px" }}>Worth Poduct</h5>
                    <div style={{ display: "flex", paddingLeft: "90px" }}>
                      <h6 style={{ color: "gray" }}>Product Name : </h6>
                      <h6>Philipe One Blade</h6>
                    </div>
                    <Rating
                      style={{ paddingLeft: "90px" }}
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                </div>
                <div />

                <div style={{ marginTop: "20px" }}>
                  <Button
                    variant="primary"
                    style={{ borderRadius: "8px", width: "30%" }}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      marginLeft: "20px",
                      width: "30%"
                    }}
                  >
                    Review
                  </Button>
                  <Button
                    variant="default"
                    style={{
                      borderRadius: "8px",
                      marginLeft: "20px",
                      width: "30%",
                      backgroundColor: "lightgrey"
                    }}
                  >
                    Delete
                  </Button>

                  <Button
                    variant="default"
                    style={{
                      borderRadius: "8px",

                      width: "100%",
                      marginTop: "20px",
                      backgroundColor: "lightgrey"
                    }}
                  >
                    Unpublished
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
    </div>
  );
}