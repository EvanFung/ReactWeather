var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var Weather = React.createClass({
  getInitialState : function () {
    return{
      location: 'Miami',
      temp:38
    }
  },
  handleSearch: function(location) {
    var that = this;
    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location:location,
        temp:temp
      })
    },function (errorMessage) {
      alert(errorMessage);
    });
    // this.setState({
    //   location : location,
    //   temp: 23
    // })
  },
  render : function () {
    var {temp,location} = this.state;
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
});

module.exports = Weather;
