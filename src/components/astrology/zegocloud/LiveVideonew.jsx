import { Container, Row, Col, Button, Input } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import axiosConfig from "../../../axiosConfig";

import { Link, useHistory } from "react-router-dom";
import LiveChat from "../../../components/chat/LiveChat";
// import "../../../../src/assets/scss/style.scss";
import "../../../../src/assets/scss/LiveStream.scss";
import { useLocation } from "react-router-dom";

function LiveVideonew() {
  const [Videocall, setVideocall] = useState(true);
  const [chanel, setchannel] = useState("");
  const [token, settoken] = useState("");
  const history = useHistory();

  const location = useLocation();

  const rtcProps = {
    appId: "7d1f07c76f9d46be86bc46a791884023",

    channel: chanel,
    layout: 1,

    token: token,
    uid: 0,
    role: "audience",
  };

  const callbacks = {
    EndCall: () => {
      setVideocall(false);

      history.push({
        pathname: "/astrorating",
      });
      sessionStorage.setItem("typeofcall", "LiveStreaming");
    },
  };
  useEffect(() => {
    console.log(location.state);
    const channel = location?.state?.channelName;
    const token = location?.state?.token;
    settoken(token);
    setchannel(channel);
    console.log(channel);

    let userId = JSON.parse(localStorage.getItem("user_id"));
    const astroid = localStorage.getItem("astroId");
  }, []);
  return (
    <div>
      <LayoutOne headerTop="visible">
        {Videocall ? (
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "80vh",
                border: "1px solid black",
                borderRadius: "8px",
              }}
              className="maindivstream container mt-3 mb-3"
            >
              <div
                style={{
                  marginLeft: "-10px",
                  display: "flex",
                  width: "60vw",
                  height: "80vh",
                  borderRadius: "8px",
                }}
                className=""
              >
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "30vw",
                  height: "80vh",
                }}
              >
                <div>
                  <LiveChat Liveastrodata={location.state} />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </LayoutOne>
    </div>
  );
}

export default LiveVideonew;
