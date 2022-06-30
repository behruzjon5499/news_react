import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import css from "../../assets/css/style.css"
import Slider from "./slider";
import Navbar from "./navbar";
import Item from "./item";
import Footer from "./footer";
import Category from "./category";
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;
class Home extends Component {


    render() {
        return (
            <div>
                <div className="container"  >
                    <Navbar/>

                </div>
                    <Slider />
                <div className="container"  >
                    <Item/>
                    <Category/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;