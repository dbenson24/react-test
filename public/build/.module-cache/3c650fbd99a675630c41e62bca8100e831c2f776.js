React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);



var CommentListItem = React.createClass({displayName: "CommentListItem",
   render: function() {
       return (
        React.createElement("div", {className: "commentListItem"}, 
            "This is a comment list item."
        )
    );
   } 
    
});

var CommentList = React.createClass({displayName: "CommentList",
   render: function() {
       return (
        React.createElement("div", {className: "commentList"}, 
            "This is a comment list.", 
            React.createElement(CommentListItem, null)
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