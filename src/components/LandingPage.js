import React from "react";
import "../styles/LandingPage.css";
import { Link} from 'react-router-dom';
import { Link as SmoothScroll} from "react-scroll";
import dollars from "../img/dollars.jpg";
import pc from "../img/pc.jpg";
import appleprods from "../img/appleprods.jpg";


 class LandingPage extends React.Component {

	render(){
		return(
      <div id="LandingPage">
        {/*-------------------Navigation Bar ------------------------------------- */}
			<div id="nav-bar">
				<nav className="navbar navbar-expand-lg navbar-light ">
				  <div className="navbar-brand"><SmoothScroll to="Home" smooth={true} offset={-50}>iPortfolio</SmoothScroll></div>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item active">
				        <span className= "nav-link"><SmoothScroll to="Home" smooth={true} offset={-50}>Home</SmoothScroll></span>
				      </li>
				      <li className="nav-item">
				        <span className= "nav-link"><SmoothScroll to="Services" smooth={true} offset={-50}>Services</SmoothScroll></span>
				      </li>
				      <li className="nav-item">
				        <span className="nav-link"><SmoothScroll to="HowItWorks" smooth={true} offset={-50}>How It Works</SmoothScroll></span>
				      </li>
            </ul>
            <ul className="navbar-nav ml-auto">
				      <li className="nav-item">
				            <Link to="/login" className="nav-link link"><div>Login</div></Link>
				      </li>
				      <li className="nav-item">
				             <Link to="/login" className="nav-link link"><div className="signin">Get Started</div></Link>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>

          {/*-------------------NSlider ------------------------------------- */}
          <div id="Home">
    				<div id="headerSlider" className="carousel slide" data-ride="carousel">
    					  <ol className="carousel-indicators">
    					    <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
    					    <li data-target="#headerSlider" data-slide-to="1"></li>
    					    <li data-target="#headerSlider" data-slide-to="2"></li>
    					  </ol>
    					<div className="carousel-inner">
    					    <div className="carousel-item active">
    					      <img src={dollars} className="d-block img-fluid special" alt="iPortfolio investment"/>
    						      <div className="carousel-caption">
    						      		<h5>Grow Your Money</h5>
    						      </div>
    					    </div>
    					    <div className="carousel-item">
    					      <img src={pc} className="d-block img-fluid" alt="iPortfolio cash"/>
    						      <div className="carousel-caption">
    								     <h5>Your Very Own Investment Portfolio</h5>
    						      </div>
    					    </div>
    					    <div className="carousel-item">
    					      <img src={appleprods} className="d-block img-fluid" alt="iPortfolio money"/>
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

            {/*-------------------AboutServices------------------------------------- */}
            <div id ="Services">
      		    <div id="about">
      			    <div className="container">
      			 		<div className="row">

      			 			<div className="col-md-12">
      			 				<h2>iPortfolio</h2>
      			 				<div className="about-content">
      			 					iPortfolio is a user specific portfolio creation software that utilizes the power of algorithms to creat investment portfolios that match users
                       investment expectations and risk profile.
                    </div>
      			 			</div>

      			 		</div>
      		 		</div>
      	    	</div>

      	    	<div id="services">
      	    		<h2> Services </h2>
      	    		<div className="row services">

      	    			<div className="col-md-3 text-center">
      	    				<div className="icon">
      	    					<i className="fa fa-line-chart"></i>
      	    				</div>
      	    				<h3>Portfolio Creation</h3>
      	    				<p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
      	    			</div>

      	    			<div className="col-md-3 text-center">
      	    				<div className="icon">
      	    					<i className="fa fa-address-card"></i>
      	    				</div>
      	    				<h3>Profiling</h3>
      	    				<p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
      	    			</div>

      	    			<div className="col-md-3 text-center">
      	    				<div className="icon">
      	    					<i className="fa fa-sliders"></i>
      	    				</div>
      	    				<h3>Wealth Management</h3>
      	    				<p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
      	    			</div>

                  <div className="col-md-3 text-center">
      	    				<div className="icon">
      	    					<i className="fa fa-money"></i>
      	    				</div>
      	    				<h3>Financial Planning</h3>
      	    				<p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
      	    			</div>
      	    		</div>
      	    	</div>

      	    	<div id="HowItWorks">
      			    <div className="container">
      			 		<div className="row">

      			 			<div className="video-parent">
      			 				<h2>How It Works</h2>
      			 				<div className="embed-responsive embed-responsive-16by9 col-md-9">
      				 				<iframe width="560"
      				 					height="315"
                        title="How To Use iPortfolio"
      				 					src="https://www.youtube.com/embed/l4TzfPfLMB4"
      				 					className="embed-responsive-item"
      				 					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      				 					allowFullScreen>
      			 					</iframe>
      			 				</div>
      			 			</div>

                    <div className="col-md-6 text-center">
                      <div className="icon">
                        <i className="fa fa-line-chart"></i>
                      </div>
                      <h3>Portfolio Creation</h3>
                      <p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
                    </div>

                    <div className="col-md-6 text-center">
                      <div className="icon">
                        <i className="fa fa-address-card"></i>
                      </div>
                      <h3>Profiling</h3>
                      <p>Lorem ipsum dolor amet. In taberna in discussurum. Quantus tremor est futurus, dies irae dies illa.</p>
                    </div>
                    </div>

                </div>


      			 		</div>
      		 		</div>


      </div>
		);
	}

}
export default LandingPage;
