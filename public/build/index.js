React.render(
    React.createElement("h1", null, "Hello, world!"),
    document.getElementById('example')
);

var data = [{
    author: "Pete Hunt",
    text: "This is one comment"
}, {
    author: "Jordan Walke",
    text: "This is *another* comment"
}];



var CommentListItem = React.createClass({displayName: "CommentListItem",
    render: function() {
        return (
            React.createElement("div", {className: "commentListItem", onClick: this.onClick}, 
            React.createElement("h3", null, " Author: ", this.props.author, " "), 
            React.createElement("h3", null, " Comment: ", this.props.children, " ")
        )
        );
    },
    onClick: function(e) {
        e.preventDefault();
        console.log(this.props.author, this.props.children);
    }

});

var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        var x = this.props.data.map(function(comment) {
            return (React.createElement(CommentListItem, {author: comment.author}, comment.text));
        });
        return (
            React.createElement("div", {className: "commentList"}, 
            React.createElement("h2", null, " Comments "), 
            x
        )
        );
    }

});


var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function() {
        return {
            data: []
        };
    },
    componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.createElement(CommentList, {data: this.state.data})
      )
        );
    }
});

React.render(
    React.createElement(CommentBox, {url: "/users/"}),
    document.getElementById('content')
);