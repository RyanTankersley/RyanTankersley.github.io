var PortfolioCard = React.createClass({
	render: function() {
		return (
			<div className="col-xs-12 col-sm-6 col-md-4">
				<div className="card sub-card portfolio-card">
					<h1>{this.props.portfolio.title}</h1>
					<div className="portfolio-image-container">
						<img className="img" src={this.props.portfolio.getImgSrc()} alt={this.props.portfolio.title} />
					</div>
					<div className="row">
						<div className="col-xs-offset-2 col-xs-4">
							<a href={this.props.portfolio.url}><button className="btn btn-primary btn-portfolio">Visit Site</button></a>
						</div>
						<div className="col-xs-4">
							<a href={this.props.portfolio.codeUrl}><button className="btn btn-primary btn-portfolio">View Source</button></a>
						</div>
					</div>
					<p>{this.props.portfolio.description}</p>
				</div>
			</div>
		);
	}
});

var PortfolioList = React.createClass({
	render: function() {
		return (
			<div className="row">
			{this.props.portfolioItems.map(function(object, i) {
				return <PortfolioCard portfolio={object} />
			})}
			</div>
		);
	}
});

ReactDOM.render(
	<PortfolioList portfolioItems={portfolioItems} />,
	document.getElementById('portfolio-list')
);