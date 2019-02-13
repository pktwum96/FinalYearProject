import React from "react";
import "./slider.css";
import dollars from "./img/dollars.jpg";
import pc from "./img/pc.jpg";
import appleprods from "./img/appleprods.jpg";


 class Slider extends React.Component {

	constructor(){
		super();
	}
	render(){
		return(
			<div id="slider">
				<div id="headerSlider" className="carousel slide" data-ride="carousel">
					  <ol className="carousel-indicators">
					    <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
					    <li data-target="#headerSlider" data-slide-to="1"></li>
					    <li data-target="#headerSlider" data-slide-to="2"></li>
					  </ol>
					<div className="carousel-inner">
					    <div className="carousel-item active">
					      <img src={dollars} className="d-block mysizing special"/>
						      <div className="carousel-caption">
						      		<h5>Grow Your Money</h5>
						      </div>
					    </div>
					    <div className="carousel-item">
					      <img src={pc} className="d-block mysizing"/>
						      <div className="carousel-caption">
								     <h5>Your Very Own Investment Portfolio</h5>
						      </div>
					    </div>
					    <div className="carousel-item">
					      <img src={appleprods} className="d-block mysizing"/>
							      <div className="carousel-caption">
							      		<h5>Your First Step Towards Financial Security</h5>
							      </div>
					    </div>
					  </div>
					  <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
				</div>
			</div>
		);
	}

}
export default Slider;
