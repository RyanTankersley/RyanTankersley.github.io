"use strict";

var PortfolioCard = React.createClass({
	displayName: "PortfolioCard",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "col-xs-12 col-sm-6 col-md-4" },
			React.createElement(
				"div",
				{ className: "card sub-card portfolio-card" },
				React.createElement(
					"h1",
					null,
					this.props.portfolio.title
				),
				React.createElement(
					"div",
					{ className: "portfolio-image-container" },
					React.createElement("img", { className: "img", src: this.props.portfolio.getImgSrc(), alt: this.props.portfolio.title })
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-xs-offset-2 col-xs-4" },
						React.createElement(
							"a",
							{ href: this.props.portfolio.url },
							React.createElement(
								"button",
								{ className: "btn btn-primary btn-portfolio" },
								"Site"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-xs-4" },
						React.createElement(
							"a",
							{ href: this.props.portfolio.codeUrl },
							React.createElement(
								"button",
								{ className: "btn btn-primary btn-portfolio" },
								"Source"
							)
						)
					)
				),
				React.createElement(
					"p",
					null,
					this.props.portfolio.description
				)
			)
		);
	}
});

var PortfolioList = React.createClass({
	displayName: "PortfolioList",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			this.props.portfolioItems.map(function (object, i) {
				return React.createElement(PortfolioCard, { portfolio: object });
			})
		);
	}
});

ReactDOM.render(React.createElement(PortfolioList, { portfolioItems: portfolioItems }), document.getElementById('portfolio-list'));