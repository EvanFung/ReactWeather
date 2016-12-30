var React = require('react');
var {Link} = require('react-router');
var Example = (props) => {
  return(
    <div>
      <h1 className="text-center">Example</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia,PA</Link>
        </li>
        <li>
          <Link to="/?location=HongKong">HongKong,HK</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Example;
