var JPlayer = React.createClass({
    getInitialState: function() {
        return {readyToPlay: false};
    },
    showPlayerClick: function() {
        var title = this.props.podcast.title;
        var url = this.props.podcast.url;
        var index = this.props.podcast.index;
        $("#" + index).jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					title: title,
					mp3: url
				});
			},
			swfPath: "../../dist/jplayer",
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true,
			autoBlur: false,
			smoothPlayBar: true,
			keyEnabled: true,
			remainingDuration: true,
			toggleDuration: true,
			cssSelectorAncestor: "#container" + index.toString()
		});
        this.setState({
            readyToPlay: true
        });
    },
    render: function() {
        return (
            <div>
                <div style={{display: this.state.readyToPlay ? 'block' : 'none'}} id={this.props.podcast.index} className="jp-jplayer" data-url={this.props.podcast.url}></div>
                <button className="btn btn-primary btn-lg" style={{display: this.state.readyToPlay ? 'none' : 'block'}} onClick={this.showPlayerClick}>Stream</button>
			    <div style={{display: this.state.readyToPlay ? 'block' : 'none'}} id={"container" + this.props.podcast.index} className="jp-audio" role="application" aria-label="media player">
				    <div className="jp-type-single">
					    <div className="jp-gui jp-interface">
						    <div className="jp-controls">
							    <button className="jp-play" role="button" tabindex="0">play</button>
							    <button className="jp-stop" role="button" tabindex="0">stop</button>
						    </div>
						    <div className="jp-progress">
						    	<div className="jp-seek-bar">
						    		<div className="jp-play-bar"></div>
						    	</div>
						    </div>
						    <div className="jp-time-holder">
						    	<div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
						    	<div className="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
						    </div>
					   </div>
					    <div className="jp-no-solution">
						    <span>Update Required</span>
						    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
					    </div>
				    </div>
			    </div>
			    <div className="podcast-card-desc-container">
			        <p>{this.props.podcast.getDesc()}</p>
			    </div>
            </div>
        );
    }    
});

var PodcastCard = React.createClass({
	render: function() {
		return (
			<div className="col-xs-12 col-sm-6 col-md-4">
				<div className="card sub-card podcast-card">
					<h1>{this.props.podcast.title}</h1>
					<p className="podcast-date">{this.props.podcast.date}</p>
					<JPlayer podcast={this.props.podcast} />
				</div>
			</div>
		);
	}
});

function Podcast(title, date, description, url, index) {
	this.title = title;
	this.date = date;
	this.description = decodeURIComponent(encodeURIComponent(description));
	this.url = url;
	this.index = index;
    this.play = false;
    
	this.getDesc = function(maxCharacters) {
        console.lo
		if(isNaN(maxCharacters))
			maxCharacters = 200;
		
		if(this.description.length <= maxCharacters)
			return this.description;
		
		return this.description.substring(0, maxCharacters) + "...";
	}
};

var PodcastList = React.createClass({
	render: function() {
				
		return (
			<div className="row">
			{this.props.podcasts.map(function(object, i) {
				return <PodcastCard podcast={object} />
			})}
			</div>
		);
	}
});