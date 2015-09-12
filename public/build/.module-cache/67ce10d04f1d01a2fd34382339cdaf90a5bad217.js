React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];



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
        var x = this.props.data.map( function (comment) {
            return (React.createElement(CommentListItem, {author: comment.author}, comment.text));
        });
       return (
        React.createElement("div", {className: "commentList"}, 
            React.createElement("h2", null, " Comments ")
        )
    );
   } 
    
});


var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.createElement(CommentList, {data: data})
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);