import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Input, Row } from "reactstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Button, ButtonGroup } from "reactstrap";
import "../../assets/scss/style.scss";
import ReactHtmlParser from "react-html-parser";
import { useHistory } from "react-router-dom";
import axiosConfig from "../../../src/axiosConfig";
// import "react-awesome-slider/dist/styles.css";
import HtmlParser from "react-html-parser";
import LayoutOne from "../../layouts/LayoutOne";
import swal from "sweetalert";
import BookPoojaForm from "./BookPoojaForm";

function Bookpoojadetail() {
  const [blogdescription, setBlogdescription] = useState([]);
  const [Pooja, setPooja] = useState({});
  const [cSelected, setCSelected] = useState([]);
  const [TotalSum, setTotalSum] = useState("");

  const Param = useParams();
  const history = useHistory();
  const [poojaform, setpoojaform] = useState(false);

  const onCheckboxBtnClick = (selected, i) => {
    const index = cSelected.indexOf(selected);

    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  useEffect(() => {
    console.log(Param.id);

    const bookpooja = JSON.parse(localStorage.getItem("poojaviewone"));
    axiosConfig
      .get(`/admin/admin_getone_event/${Param.id}`)
      .then((res) => {
        // console.log(res.data.data);
        setPooja(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setPooja(bookpooja);
  }, [Param]);
  const handlebookpooja = () => {
    const poojaprice = Pooja?.pooja_price;
    const productprice = cSelected?.map((value) => value?.price);
    const totalSum = productprice.reduce((a, b) => a + b, 0) + poojaprice;

    setTotalSum(totalSum);
    setpoojaform(true);

    const userid = localStorage.getItem("user_id");
    if (userid) {
    } else swal("User Not Found", "Login first");
  };
  return (
    <div>
      <LayoutOne headerTop="visible">
        {poojaform === true ? (
          <>
            <div>
              <BookPoojaForm
                totalSum={TotalSum}
                data={cSelected}
                Param={Pooja}
              />
            </div>
          </>
        ) : (
          <>
            <Container className="">
              <Row>
                <h2 className=" justify-content-center mt-5 mb-3">
                  {Pooja?.pooja_type?.pooja_name}
                </h2>
              </Row>

              <Row className="mt-3">
                <img
                  className="  justify-content-center imgColnew"
                  //   src={blogdescription?.blogImg}
                  src={Pooja?.poojaimg}
                  style={{ height: "500px", borderRadius: "10px" }}
                  alt="blogimg"
                />
                <Row>
                  <div className=" descriptionofblog   mt-3 mb-3">
                    {HtmlParser(Pooja?.desc)}
                  </div>
                </Row>
                <Row>
                  <div className=" descriptionofblog   mt-3 mb-3">
                    <h4>
                      <b> Benefits: </b>
                    </h4>
                    <p style={{ fontSize: "18px" }}> {Pooja?.benefits} </p>
                  </div>
                </Row>

                <div className=" descriptionofblog   mt-1 mb-1">
                  <h4>
                    <b> Duration:</b>{" "}
                    <span style={{ fontSize: "18px" }}>
                      {" "}
                      {Pooja?.duration}{" "}
                    </span>
                  </h4>
                </div>
                <div className=" descriptionofblog   mt-1 mb-1">
                  <h4>
                    <b> Mode of Pooja:</b>{" "}
                    <span style={{ fontSize: "18px" }}> {Pooja?.mode} </span>
                  </h4>
                </div>

                <div className=" descriptionofblog   mt-1 mb-1">
                  <h4>
                    {" "}
                    <b> Pooja Price: </b>
                    <span style={{ fontSize: "18px" }}>
                      {"   "}
                      <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                      {Pooja?.pooja_price}{" "}
                    </span>
                  </h4>
                </div>

                <div className=" descriptionofblog   mt-1 mb-1">
                  <h4>
                    {" "}
                    <b> Pooja Name:</b>
                    {"  "}
                    <span style={{ fontSize: "18px" }}>
                      {"  "}
                      {Pooja?.pooja_type?.pooja_name}
                    </span>
                  </h4>
                </div>
              </Row>

              <div>
                {/* <p>Selected Product: {JSON.stringify(cSelected)}</p> */}
                {Pooja?.product?.length > 0 ? (
                  <>
                    <Row>
                      {Pooja?.product?.map((ele, index) => (
                        <>
                          <Col key={index} lg="4" md="4" sm="6">
                            <Card className="mycardbookpooja">
                              <Row>
                                <Col lg="12" md="12" sm="12">
                                  <img
                                    width="100%"
                                    style={{
                                      BorderRadius: "12px",
                                      height: "16rem",
                                    }}
                                    src={ele?.image}
                                    alt="image"
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12" md="12" sm="12">
                                  <div className="mx-1">
                                    <Input
                                      className="from-control"
                                      onClick={() =>
                                        onCheckboxBtnClick(ele, index)
                                      }
                                      active={cSelected.includes(1)}
                                      type="checkbox"
                                    />

                                    <span className="mx-2 productname">
                                      <b> {ele?.name}</b>
                                    </span>
                                  </div>
                                  <p className="priceofadd container">
                                    {" "}
                                    <b className="container">Price </b>:{" "}
                                    <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                                    {ele?.price}
                                    Rs/-
                                  </p>
                                  <p className="mx-3 mb-2  description">
                                    desc :- {ele?.description}
                                  </p>
                                </Col>
                              </Row>
                            </Card>
                          </Col>
                          {/* <Col lg="4" md="6" sm="6"></Col> */}

                          {/* <Col lg="2" md="4" sm="4">
                            
                            </Col> */}
                          <br />
                          {/* <hr /> */}
                        </>
                      ))}
                    </Row>
                  </>
                ) : null}
              </div>

              <div className="d-flex justify-content-center mt-3 mb-3 container">
                <Button onClick={handlebookpooja} color="success">
                  Go to Next
                </Button>
              </div>
            </Container>
          </>
        )}
      </LayoutOne>
    </div>
  );
}

export default Bookpoojadetail;
