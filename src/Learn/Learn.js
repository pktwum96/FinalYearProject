import React from 'react';
import Navbar from '../components/NavSideBar/Navbar.js';
import Sidebar from '../components/NavSideBar/Sidebar.js';
import Profile from '../components/Profile.js';
import './styles/Learn.css';
import Videolist from '../_shared/container/VideoList.js';
import { connect } from 'react-redux';
import { toggleSideBar } from '../_shared/actions/index';

class Learn extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div
					id="wrapper"
					className={this.props.sidebarMode ? 'd-flex toggled active' : 'd-flex'}
				>
					<Sidebar />
					<div id="page-content-wrapper">
						<Navbar toggleSideBar={this.props.toggleSideBar} />
						<div className="container-fluid ">
							<div className="row">
								<div className="col-md-9 px-0" id="LearnPage">
									<div className="well videolist">
										{this.props.videos.map((video, i) => (
											<Videolist key={i} video={video} />
										))}
									</div>
								</div>
								<div className="col-md-3 px-0">
									<Profile />
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		sidebarMode: state.sidebar.sidebarMode,
		videos: state.videoList.videos
	};
};

const mapDispatchToProps = {
	toggleSideBar
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Learn);
