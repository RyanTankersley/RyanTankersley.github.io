"use strict";

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
				React.createElement("div", { id: this.props.podcast.index, className: "jp-jplayer", "data-url": this.props.podcast.url }),
				React.createElement(
					"div",
					{ id: "container" + this.props.podcast.index, className: "jp-audio", role: "application", "aria-label": "media player" },
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
					React.createElement("p", { id: "desc" + this.props.podcast.index })
				)
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

	this.getDesc = function (maxCharacters) {
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