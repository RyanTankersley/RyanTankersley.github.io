function Podcast(title, date, description, index) {
	this.title = title;
	this.date = date;
	this.description = description;
	this.index = index;
	
	var baseUrl = "http://www.techreformation.com/";
	var podcastFileUrlAddition = "wp-content/uploads/";
	
	this.getPaddedIndex = function(index) {
		var length = index.length;
		while(length < 3)
		{
			length++;
			index = "0" + index;
		}
		
		return index;
	}
	
	this.getUrl = function() {
		var urlIndex = this.getPaddedIndex(index.toString());
		
		var mainUrl = urlIndex + " " + title;
		
		while(mainUrl.search(" ") >= 0)
			mainUrl = mainUrl.replace(" ", "-")
		
		return baseUrl + mainUrl;
	}
	
	this.getFileUrl = function() {
		var urlIndex = index.toString();
		var length = urlIndex.length;
		while(length < 3)
		{
			length++;
			urlIndex = "0" + urlIndex;
		}
		
		var url =  baseUrl + podcastFileUrlAddition + urlIndex + ".mp3";
		return url;
	}
	
	this.getDesc = function(maxCharacters) {
		if(isNaN(maxCharacters))
			maxCharacters = 200;
		
		if(this.description.length <= maxCharacters)
			return this.description;
		
		return this.description.substring(0, maxCharacters) + "...";
	}
};

var podcasts = [
		new Podcast(
			"Rest Azured", 
			"October 18, 2015", 
			"News, how to stay in touch with the latest content via Feed Readers and we chat about" + 
		    " TV and entertainment from a Christian perspective.",
			10),
		new Podcast(
			"Calvinist Batman", 
			"October 11, 2015", 
			"Guess what, people? We got Calvinist Batman to come on the show! We talk news, Bat-tech, and ask Batman how he manages his anonymous online identity in a way that honors God and his church.",
		    9),
		new Podcast(
			"Keyboard Warriors", 
			"October 5, 2015",
			"We play QuizUp on a whim, you should let Bing pay you to use it, and we talk internet mob justice.",
		    8),
		new Podcast(
			"Degrees of Definitivity", 
			"September 27, 2015", 
			"The Pope blesses and curses the iPhone launch in NYC, getting deeper into context with Blue Letter Bible, and we end up being balanced on ad blockers, despite our best efforts.",
		    7),
		new Podcast(
			"Speaking of Segues", 
			"September 20, 2015", 
			"Disliking Facebook’s button, liking Chromecast, and debating free internet!",
		    6),
		new Podcast(
			"The AppleCast", 
			"September 13, 2015", 
			"We talk Apple, more Apple, and how Apple is interesting theologically.",
		    5),
		new Podcast(
			"Mighty Drones of Valor", 
			"September 7, 2015", 
			"Trying not to talk about Apple rumors, seeing how we use our Pockets, and discussing drones and how privacy should be viewed through the Bible.",
			4),
		new Podcast(
			"A Quality Stick Is Hard To Find", 
			"August 30, 2015", 
			"News, presenting apps for memorizing Scripture, and discussing smartphone addiction.",
			3),
		new Podcast(
			"They Were Lovers in the End", 
			"August 23, 2015", 
			"This Week: Xena the Warrior Princess, to-do list apps, and we talk about the effect of automation on jobs.",
			2),
		new Podcast(
			"Dead Horse", 
			"August 16, 2015", 
			"This week: News, password managers and virtual reality!",
			1),
		new Podcast(
			"The Introsode", 
			"August 9, 2015", 
			"Tech Reformation is a brand new podcast, brought to you by four reformed Christian guys who love Jesus and technology (definitely in that order). With a growing number of reformed podcasts hitting the airwaves you might be wondering how this one is unique and basically you’ll have to wait to find out! We’ll be answering that question in our very first episode though, which is coming soon, so stay tuned!",
			0),
];