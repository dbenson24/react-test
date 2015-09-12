React.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

var data = [{
    author: "Pete Hunt",
    text: "This is one comment"
}, {
    author: "Jordan Walke",
    text: "This is *another* comment"
}];



var CommentListItem = React.createClass({
    render: function() {
        return (
            <div className="commentListItem" onClick={this.onClick}>
            <h3> Author: {this.props.author} </h3>
            <h3> Comment: {this.props.children} </h3>
        </div>
        );
    },
    onClick: function(e) {
        e.preventDefault();
        console.log(this.props.author, this.props.children);
    }

});

var CommentList = React.createClass({
    render: function() {
        var x = this.props.data.map(function(comment) {
            return (<CommentListItem author={comment.author}>{comment.text}</CommentListItem>);
        });
        return (
            <div className="commentList">
            <h2> Comments </h2>
            {x}
        </div>
        );
    }

});


var CommentBox = React.createClass({
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
            <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentList data={this.state.data}/>
      </div>
        );
    }
});

React.render(
    <CommentBox url="/users/"/>,
    document.getElementById('content')
);