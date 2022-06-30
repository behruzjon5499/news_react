import React, {Component} from 'react';
import {Col, Dropdown, Row} from "react-bootstrap";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };
class Slider extends Component {
    constructor(props) {
        super(props);
        this.slider = React.createRef();
        this.state = {
            autoplay: true,
        };
    }
    _onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };

    render() {
        return (
            <div>
                <div className="container-fluid" style={{ paddingBottom: 20 }}>
                    <Row>
                        <Col span={12} style={{ marginTop: 20 }}>
                            <RBCarousel
                                animation={true}
                                autoplay={this.state.autoplay}
                                slideshowSpeed={2000}
                                defaultActiveIndex={0}
                                leftIcon={this.state.leftIcon}
                                rightIcon={this.state.rightIcon}
                                onSelect={this._onSelect}
                                ref={this.slider}
                                version={4}
                            >
                                <div className="slider-main"  >
                                    <img
                                        style={{ width: "100%", height: "100%" }}
                                        src="https://www.w3schools.com/bootstrap/ny.jpg"
                                    />
                                    <div className="carousel-caption">Image</div>
                                </div>
                                <div className="slider-main" style={{ ...styles, backgroundColor: "aqua" }}>
                                    <video
                                        className="carousel-center"
                                        controls
                                        style={{ width: "75%" }}
                                        height="250"
                                    >
                                        <source
                                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <div className="carousel-caption">Video</div>
                                </div>
                                <div  className="slider-main" style={{ ...styles, backgroundColor: "lightpink" }}>
                                    <div className="carousel-center">center Text</div>
                                    <div className="carousel-caption">Text</div>
                                </div>
                                <div  className="slider-main" style={{ ...styles, backgroundColor: "lightblue" }}>
                                    <span>text</span>
                                    <div className="carousel-caption">Text</div>
                                </div>
                                <div  className="slider-main" style={{ ...styles, backgroundColor: "lightblue" }}>
                                    <div className="carousel-center">
                                        <iframe
                                            style={{ width: 500 }}
                                            height="250"
                                            src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                                            frameBorder="0"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="carousel-caption">Youtube</div>
                                </div>
                            </RBCarousel>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Slider;