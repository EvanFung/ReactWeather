var React = require('react');

// var About = React.createClass({
//   render : function () {
//     return(
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
      <h3 className="text-center">About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
         sunt in culpa qui officia deserunt mollit
          anim id est laborum.
      </p>
       <p>
         Here ar some of the tool i used :
       </p>
       <ul>
         <li>
           <a href="www.facebook.github.io/react">React - Javascript Framework</a>
         </li>
       </ul>
    </div>
  )
};

module.exports = About;
