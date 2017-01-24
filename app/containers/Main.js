var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header: {
    background: '#FFD070',
    display: 'flex',
    backgroundSize: 'cover',
    margin: 0,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>

        <div style={styles.header}>
          <h1>Main.js Header</h1>
          <GetCityContainer direction={'row'}/>
        </div>

        {this.props.children}

      </div>
    )
  }
})

module.exports = Main;
