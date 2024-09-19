import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import myVideo from "../../assets/myvidio.mp4";
import ReactPlayer from "react-player";
import "./Choose.css";
const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url={myVideo}
                  controls
                  width="100%"
                  height="350px"
                  playing={true} // Autoplay the video
                  muted={true}   // Mute the video to comply with autoplay policies
                  
                />
              ) : (
                <img src="video_bg-1024x465.jpg" alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
