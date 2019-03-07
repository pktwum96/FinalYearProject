import React from 'react'

class VideoList extends React.Component{
    render () {
        const {id,name,url}=this.props.video;

        return (
            <div className="col-md-3 mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="800"
                        height="315"
                        title={name}
                        src={url}
                        className="embed-responsive-item"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <h6 className="p-4">{id}. {name}</h6>
            </div>
        )
    }
}



    export default VideoList;
