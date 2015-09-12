React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);



var CommentListItem = React.createClass({displayName: "CommentListItem",
   render: function() {
       return (
        React.createElement("div", {className: "commentListItem"}, 
            React.createElement("h3", null, " Author: ", this.props.author, " "), 
            React.createElement("h3", null, " Comment: ", this.props.children, " ")
        )
    );
   } 
    
});

var CommentList = React.createClass({displayName: "CommentList",
   render: function() {
       return (
        React.createElement("div", {className: "commentList"}, 
            React.createElement("h2", null, " Comments "), 
            React.createElement(CommentListItem, {author: "Derek Benson"}, " I love ReactJS "), 
            React.createElement(CommentListItem, {author: "Emily Swanborg"}, " I love Derek Benson ")
        )
    );
   } 
    
});


var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.createElement(CommentList, null)
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);