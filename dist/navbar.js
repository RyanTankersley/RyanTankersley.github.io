"use strict";

var Navbar = React.createClass({
  displayName: "Navbar",

  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-inverse" },
      React.createElement(
        "a",
        { className: "navbar-brand", href: "index.html" },
        React.createElement("img", { className: "js-img-nav-brand", id: "header-logo", src: "content/img/ts-logo-white.png" })
      ),
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "button",
          { type: "button", className: "navbar-toggle",
            "data-toggle": "collapse", "data-target": ".navbar-collapse" },
          React.createElement(
            "span",
            { className: "sr-only" },
            "Toggle navigation"
          ),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" })
        )
      ),
      React.createElement(
        "div",
        { className: "navbar-collapse collapse" },
        React.createElement(
          "ul",
          { className: "nav navbar-nav" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "contact.html", className: "navbar-item" },
              "Contact"
            )
          )
        ),
        React.createElement(
          "ul",
          { className: "nav navbar-nav navbar-right" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "portfolio.html", className: "navbar-item" },
              "Portfolio"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "http://blog.tankstudios.net", className: "navbar-item" },
              "Blog"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "podcast.html", className: "navbar-item" },
              "Podcast"
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Navbar, null), document.getElementById('navbar'));