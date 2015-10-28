function PortfolioItem(title, description, imageName, url, codeUrl) {
	this.title = title;
	this.description = description;
	this.imageName = imageName;
	this.url = url;
	this.baseImagePath = "content/img/portfolio/";
	this.codeUrl = codeUrl;
	
	this.getImgSrc = function() {
		return this.baseImagePath + imageName;
	}
};

var portfolioItems = [
	new PortfolioItem("Tank Studios", 
	"This is the home base for all Tank Studios content. The site is built as static HTML5 pages, and it relies on ReactJS to help with the repetitive parts.",
	"tshome.png", "http://www.tankstudios.net", "#"),
	new PortfolioItem("Tech Reformation Slack", 
	"The Tech Reformation podcast created a Slack team for its community.  This page allows people to easily invite themself to join the team. It relies on a NodeJS backend to call the Slack API.",
	"trslack.png", "http://slack.techreformation.com/", "#")
];