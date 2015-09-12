React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);



var commentListItem = React.createClass({displayName: "commentListItem",
   render: function() {
       return (
        React.createElement("div", {className: "commentListItem"}, 
            "This is a comment list item."
        )
    );
   } 
    
});

var commentList = React.createClass({displayName: "commentList",
   render: function() {
       return (
        React.createElement("div", {className: "commentList"}, 
            "This is a comment list.", 
            React.createElement("commentListItem", null)
        )
    );
   } 
    
});


var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.createElement("commentList", null)
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);