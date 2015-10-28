var Navbar = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-inverse">
				<a className="navbar-brand" href="index.html"><img className="js-img-nav-brand" id="header-logo" src="content/img/ts-logo-white.png" /></a>
				<div className="navbar-header">
                    <button type="button" className="navbar-toggle"
                            data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="contact.html" className="navbar-item">Contact</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="portfolio.html" className="navbar-item">Portfolio</a></li>
                        <li><a href="http://blog.tankstudios.net" className="navbar-item">Blog</a></li>
                        <li><a href="podcast.html" className="navbar-item">Podcast</a></li>
                    </ul>
                </div>
			</nav>
		);
	}
});

ReactDOM.render(
	<Navbar />,
	document.getElementById('navbar')
);