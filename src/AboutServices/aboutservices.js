import React from 'react';
import './aboutservices.css';

class Aboutservices extends React.Component {
  render() {
    return (
	    <div id ="Services">
		    <div id="about">
			    <div className="container">
			 		<div className="row">

			 			<div className="col-md-12">
			 				<h2>iPortfolio</h2>
			 				<div className="about-content">
			 					iPortfolio is a user specific portfolio creation software that utilizes the power of algorithms to creat investment portfolios that match users' investment expectations and risk profile.
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
			 				<div className="embed-responsive embed-responsive-16by9">
				 				<iframe width="560"
				 					height="315"
				 					src="https://www.youtube.com/embed/l4TzfPfLMB4"
				 					className="embed-responsive-item"
				 					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				 					allowfullscreen>
			 					</iframe>
			 				</div>
			 			</div>

			 		</div>
		 		</div>
	    	</div>
	    </div>
    );
  }
}

export default Aboutservices;
