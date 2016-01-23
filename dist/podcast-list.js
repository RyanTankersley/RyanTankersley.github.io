"use strict";

var JPlayer = React.createClass({
	displayName: "JPlayer",

	getInitialState: function getInitialState() {
		return { readyToPlay: false };
	},
	showPlayerClick: function showPlayerClick() {
		var title = this.props.podcast.title;
		var url = this.props.podcast.url;
		var index = this.props.podcast.index;
		$("#" + index).jPlayer({
			ready: function ready() {
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
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement("div", { style: { display: this.state.readyToPlay ? 'block' : 'none' }, id: this.props.podcast.index, className: "jp-jplayer", "data-url": this.props.podcast.url }),
			React.createElement(
				"button",
				{ className: "btn btn-primary btn-lg", style: { display: this.state.readyToPlay ? 'none' : 'block' }, onClick: this.showPlayerClick },
				"Stream"
			),
			React.createElement(
				"div",
				{ style: { display: this.state.readyToPlay ? 'block' : 'none' }, id: "container" + this.props.podcast.index, className: "jp-audio", role: "application", "aria-label": "media player" },
				React.createElement(
					"div",
					{ className: "jp-type-single" },
					React.createElement(
						"div",
						{ className: "jp-gui jp-interface" },
						React.createElement(
							"div",
							{ className: "jp-controls" },
							React.createElement(
								"button",
								{ className: "jp-play", role: "button", tabindex: "0" },
								"play"
							),
							React.createElement(
								"button",
								{ className: "jp-stop", role: "button", tabindex: "0" },
								"stop"
							)
						),
						React.createElement(
							"div",
							{ className: "jp-progress" },
							React.createElement(
								"div",
								{ className: "jp-seek-bar" },
								React.createElement("div", { className: "jp-play-bar" })
							)
						),
						React.createElement(
							"div",
							{ className: "jp-time-holder" },
							React.createElement(
								"div",
								{ className: "jp-current-time", role: "timer", "aria-label": "time" },
								" "
							),
							React.createElement(
								"div",
								{ className: "jp-duration", role: "timer", "aria-label": "duration" },
								" "
							)
						)
					),
					React.createElement(
						"div",
						{ className: "jp-no-solution" },
						React.createElement(
							"span",
							null,
							"Update Required"
						),
						"To play the media you will need to either update your browser to a recent version or update your ",
						React.createElement(
							"a",
							{ href: "http://get.adobe.com/flashplayer/", target: "_blank" },
							"Flash plugin"
						),
						"."
					)
				)
			),
			React.createElement(
				"div",
				{ className: "podcast-card-desc-container" },
				React.createElement(
					"p",
					{ id: "desc" + this.props.podcast.index },
					this.props.podcast.getDesc()
				)
			)
		);
	}
});

var PodcastCard = React.createClass({
	displayName: "PodcastCard",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-4" },
			React.createElement(
				"div",
				{ className: "card sub-card podcast-card" },
				React.createElement(
					"h1",
					null,
					this.props.podcast.title
				),
				React.createElement(
					"p",
					{ className: "podcast-date" },
					this.props.podcast.date
				),
				React.createElement(JPlayer, { podcast: this.props.podcast })
			)
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

	this.getDesc = function (maxCharacters) {
		console.lo;
		if (isNaN(maxCharacters)) maxCharacters = 200;

		if (this.description.length <= maxCharacters) return this.description;

		return this.description.substring(0, maxCharacters) + "...";
	};
};

var PodcastList = React.createClass({
	displayName: "PodcastList",

	render: function render() {

		return React.createElement(
			"div",
			{ className: "row" },
			this.props.podcasts.map(function (object, i) {
				return React.createElement(PodcastCard, { podcast: object });
			})
		);
	}
});