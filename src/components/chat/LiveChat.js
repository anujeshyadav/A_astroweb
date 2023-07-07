import React from "react";
import { Button, Col, Container, Form, Input, Label, Row } from "reactstrap";
import "../../assets/scss/chat.scss";

import ChatAppMassage from "./ChatAppMassage";
import axiosConfig from "../../axiosConfig";
import { SlCallOut } from "react-icons/sl";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import LiveAstrologer from "../astrology/LiveAstrologer";
import { UserLogin, ViewOneUser, varifyOtp } from "../Apicall/ApiCall";
import { Fetchuserdetail } from "../header/IconGroup";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();
    this.callmsg = React.createRef();

    this.state = {
      Index: "",
      LoginMobileNo: "",
      setTimer: 0,
      data: {},
      sendbutton: "",
      Activeastro: {},
      CurrentRoomid: "",
      roomChatData: [],
      msg: "hello",
      roomId: "",
      modal: false,
      modalone: false,
      ToggleMode: false,
      otpMsg: "",
      otp: "",
      mobile: "",
    };

    this.toggle = this.toggle.bind(this);
    this.toggleone = this.toggleone.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleone() {
    this.setState({
      modalone: !this.state.modalone,
    });
  }

  otpHandler = async (e) => {
    e.preventDefault();
    let payload = {
      mobile: parseInt(this.state.mobile),
      otp: parseInt(this.state.otp),
    };
    await varifyOtp(payload)
      .then((response) => {
        if (response.status === true) {
          this.setState({ otpMsg: response.msg });
          localStorage.setItem("userData", JSON.stringify(response?.data));
          localStorage.setItem("token", JSON.stringify(response?.token));
          localStorage.setItem("user_id", JSON.stringify(response?.data?._id));
          console.log(response?.data?._id);
          Fetchuserdetail();

          localStorage.setItem(
            "user_mobile_no",
            JSON.stringify(response?.data?.mobile)
          );
          if (response.msg === "otp verified") {
            this.setState({ ToggleMode: true });
            this.toggle();
          }
        }
      })
      .catch((err) => console.log(err));
  };
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = async (e) => {
    e.preventDefault();
    let obj = {
      mobile: parseInt(this.state.mobile),
    };
    await UserLogin(obj)
      .then((res) => {
        if (res.msg === "otp Send Successfully") {
          this.setState({ otpMsg: res.msg });
          swal("otp Send Successfully");
        }
      })
      .catch((err) => {
        swal("Error!", "User doesn't Exist", "error");
        console.log(err);
      });
  };

  MakeCallHandler = (Astrodata) => {
    if (Astrodata.callingStatus === "Busy") {
      swal(
        `Astrologer is Busy for ${this.state.astroData?.waiting_tym} Min`,
        "Do You Want to Be in queue ",

        {
          buttons: {
            cancel: "Be in queue",
            catch: { text: "Cancel ", value: "catch" },
          },
        }
      ).then((value) => {
        switch (value) {
          case "catch":
            break;
          default:
            let astroid = localStorage.getItem("astroId");
            let userId = JSON.parse(localStorage.getItem("user_id"));
            let payload = {
              userId: userId,
            };
            axiosConfig
              .get(`/user/make_another_call/${astroid}`, payload)
              .then((res) => {
                console.log(res);
                swal("Added in waitQueue list");
              })
              .catch((err) => {
                console.log(err);
              });
        }
      });
    } else {
      let userId = JSON.parse(localStorage.getItem("user_id"));
      let mobileNo = localStorage.getItem("user_mobile_no");
      let obj = {
        userid: userId,
        astroid: Astrodata?._id,
        From: Astrodata?.mobile,
        To: mobileNo,
      };
      if (userId !== "" && userId !== null) {
        const data = {
          userid: userId,
          astroid: Astrodata?._id,
        };
        axiosConfig
          .post(`/user/addCallWallet`, data)
          .then((response) => {
            swal("wait Calling to Astrologer");
            if (response.data.status === true) {
              axiosConfig
                .post(`/user/make_call`, obj)
                .then((response) => {
                  // console.log("Calling", response.data);
                })
                .catch((error) => {
                  console.log(error?.response?.data?.error);
                  if (error?.response?.data?.error) {
                    swal("Try again after some Time ", "Internal server");
                  }
                });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("Need to Login first");
      }
    }
  };
  handleJoinVoice = (Astrodata) => {
    let userid = JSON.parse(localStorage.getItem("user_id"));
    if (userid) {
      this.MakeCallHandler(Astrodata);
    } else swal("User Not login", "Try to login First");
  };
  componentDidMount = () => {
    this.handleliveChat();
    console.log(this.props);
    const astroId = localStorage.getItem("astroId");
    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlechat = () => {
    axiosConfig
      .get(`/user/allchatwithuser/${this.state.roomId}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getChatRoomId = async (user, index) => {
  //   this.setState({ sendbutton: user.astroid?._id });
  //   this.setState({ Index: index });
  //   localStorage.setItem("videoCallAstro_id", user?.astroid?._id);
  //   console.log("userdata", user);
  //   this.setState({ astroId: user?.astroid?._id, roomId: user?.roomid });
  //   this.handlechat();
  // };

  handleliveChat = () => {
    setInterval(() => {
      const astroId = localStorage.getItem("astroId");
      axiosConfig
        .get(`/user/liveChat_msgbyastro/${astroId}`)
        .then((res) => {
          console.log(res);
          this.setState({ roomChatData: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };
  handleStatusAstroviewOne = () => {
    setInterval(() => {
      const astroId = localStorage.getItem("astroId");
      axiosConfig
        .get(`/admin/getoneAstro/${astroId}`)
        .then((res) => {
          console.log(res.data.data);
          this.setState({ Activeastro: res?.data?.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
  };

  submitHandler = async (e) => {
    e.preventDefault();

    const astroId = localStorage.getItem("astroId");
    let userid = JSON.parse(localStorage.getItem("user_id"));
    console.log(this.state.msg);
    if (userid) {
      if (this.state.msg != "") {
        let payload = {
          astroid: astroId,
          userid: userid,
          msg: this.state.msg,
        };
        axiosConfig.post(`/user/astro_liveChat`, payload).then((res) => {
          console.log(res);
          this.setState({ msg: "" });
        });
      } else swal("Input filed is blank", "Fill it before send");
    } else this.modalOpen();
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  handlerating = (e) => {
    e.preventDefault();
    sessionStorage.setItem("typeofcall", "Livestream");
    this.props.history.push("/astrorating");
  };

  modalOpen = () => {
    let userid = JSON.parse(localStorage.getItem("user_id"));
    if (userid) {
      this.setState({ ToggleMode: true });
      this.toggle();
      this.componentDidMount();
      this.handleStatusAstroviewOne();
    } else {
      this.toggleone();

      // swal("User Not login", "Try to login First");
    }
  };
  render() {
    return (
      <div className="">
        <div class="app rt-chats">
          <div class="messages">
            <div className="chat-header">
              <p>
                <span>
                  <img
                    src={this.state.Activeastro?.img}
                    className="app-img"
                    alt=""
                  />
                </span>
                {this.state.Activeastro?.fullname}
              </p>
              <span
                // onClick={this.toggle}
                onClick={this.modalOpen}
                className="appchattimer"
              >
                <div className="">
                  <Button
                    style={{ background: "green", borderRadius: "50%" }}
                    className="callingtime"
                    color="primary"
                  >
                    <SlCallOut />
                  </Button>
                </div>
              </span>
            </div>
            <div class="messages-history">
              <ChatAppMassage
                roomChatData={
                  this.state.roomChatData.length > 0
                    ? this.state.roomChatData
                    : []
                }
              />
            </div>

            <form class="messages-inputs">
              <input
                type="text"
                placeholder="Send a message"
                onChange={(e) => {
                  this.handleChange(e);
                }}
                value={this.state.msg}
                defaultValue={""}
              />

              <button
                onClick={(e) => {
                  this.submitHandler(e);
                }}
              >
                <i class="material-icons">send</i>
              </button>
            </form>
          </div>
        </div>
        {this.state.ToggleMode ? (
          <>
            <Modal
              size="md"
              style={{ maxWidth: "600px", width: "100%" }}
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader className="mr-3" toggle={this.toggle}>
                <div className="d-flex justify-content-center">
                  <img
                    src={this.state.Activeastro?.img}
                    className="app-imgs"
                    alt="img"
                  />
                </div>
                <span className="wr-4">Connect Astrologer</span>
              </ModalHeader>
              <ModalBody>
                <div className="">
                  <Row>
                    <Col lg="12">
                      <Row>
                        <Col lg="1" md="1" sm="1">
                          <Button
                            style={{ background: "green", borderRadius: "50%" }}
                            className="callingtime"
                            color="primary"
                          >
                            <SlCallOut />
                          </Button>
                        </Col>
                        <Col lg="8" md="8" sm="8">
                          <div>
                            <h5
                              className="mx-2"
                              style={{ marginBottom: "0px" }}
                            >
                              Voice Call @ {this.state.Activeastro?.callCharge}{" "}
                              Rs/min
                            </h5>
                            <h6
                              className="mx-2"
                              style={{ marginBottom: "0px" }}
                            >
                              Availability:
                              <b style={{ color: "green" }}>
                                {" "}
                                {this.state.Activeastro?.callingStatus}
                              </b>
                            </h6>
                            <small className="mx-2">
                              you both would be on Voice call
                            </small>
                          </div>
                        </Col>
                        <Col lg="3" md="3" sm="3">
                          <Button
                            onClick={() =>
                              this.handleJoinVoice(this.state.Activeastro)
                            }
                            className="callingtimeclick"
                            color="primary"
                          >
                            Join Now
                          </Button>
                        </Col>
                      </Row>
                      {/* <div>
                    <div className="">
                      <Button
                        style={{ background: "green", borderRadius: "50%" }}
                        className="callingtime"
                        color="primary"
                      >
                        <SlCallOut />
                      </Button>

                   

                    
                    </div>
                  </div> */}
                    </Col>
                  </Row>
                </div>
              </ModalBody>
            </Modal>
          </>
        ) : (
          <>
            <Modal
              size="md"
              style={{ maxWidth: "600px", width: "100%" }}
              isOpen={this.state.modalone}
              toggle={this.toggleone}
            >
              <ModalHeader className="mr-3" toggle={this.toggleone}>
                <div className="d-flex justify-content-center">
                  <h2 className="wr-4">User-Login </h2>
                </div>
              </ModalHeader>

              <ModalBody>
                <div className="">
                  <div className="login-form-container">
                    {this.state.otpMsg === "otp Send Successfully" ? (
                      <div className="login-register-form">
                        <Form onSubmit={this.otpHandler}>
                          <Input
                            type="number"
                            name="otp"
                            required
                            placeholder="Enter otp"
                            value={this.state.otp}
                            onChange={this.changeHandler}
                          />
                          <div className="button-box">
                            <div className="login-toggle-btn"></div>
                            <Button
                              color="primary"
                              className="mt-2"
                              type="submit"
                            >
                              <span>Otp Verify</span>
                            </Button>
                          </div>
                        </Form>
                      </div>
                    ) : (
                      <div className="login-register-form">
                        <Form onSubmit={this.loginHandler}>
                          <Input
                            type="number"
                            name="mobile"
                            maxLength="12"
                            required
                            placeholder="Enter Your Mobile No."
                            value={this.state.mobile}
                            onChange={this.changeHandler}
                          />
                          <div className="button-box">
                            <div className="d-flex justify-content-center"></div>
                            <Button
                              color="primary"
                              type="submit"
                              className="mt-2"
                            >
                              <span>Login</span>
                            </Button>
                          </div>
                        </Form>
                      </div>
                    )}
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </>
        )}
      </div>
    );
  }
}
export default ChatApp;
