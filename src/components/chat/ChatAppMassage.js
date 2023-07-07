import React from "react";

import "../../assets/scss/chat.scss";
import { Col, Row } from "reactstrap";
import { CloudLightning } from "react-feather";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "user" ? (
                      <div key={index} className="message me">
                        <div className="message-body">{chat.msg}</div>
                      </div>
                    ) : (
                      <div key={index} className="message">
                        <div class="message-body">
                          <Row>
                            <Col lg="4">
                              <img
                                style={{ borderRadius: "50%" }}
                                width="40px"
                                height="40px"
                                src={chat?.userid?.userimg}
                              />
                            </Col>
                            <Col lg="">
                              <Row>
                                <h6 className="container">
                                  <b> {chat?.userid?.fullname}</b>
                                </h6>
                              </Row>
                              <Row>
                                <h6 className="container">{chat.msg}</h6>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
