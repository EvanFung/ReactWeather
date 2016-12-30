var React = require('react');
var {Link,IndexLink} = require('react-router');
//IndexRoute的page要配合用IndexLink
// var Nav = React.createClass({
//   render: function () {
//     return(
//       <div>
//         <h2>Nav component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get About</Link>
//         <Link to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Example</Link>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return(
    <div>
      <h2>Nav component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather </IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Example</Link>
    </div>
  );
};
module.exports = Nav;
