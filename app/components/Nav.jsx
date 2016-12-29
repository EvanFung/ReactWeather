var React = require('react');
var {Link} = require('react-router');
var Nav = React.createClass({
  render: function () {
    return(
      <div>
        <h2>Nav component</h2>
        <Link to="/">Get Weather </Link>
        <Link to="/about">Get About</Link>
        <Link to="/example">Get Example</Link>
      </div>
    );
  }
});

module.exports = Nav;
