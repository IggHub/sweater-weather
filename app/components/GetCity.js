var React = require('react');
var PropTypes = React.PropTypes;

function Button(props){
  return (
    <button
      type='button'
      className='btn btn-success'
      style={{margin: 10}}
      onClick={props.onSubmitCity}
      >
      {props.children}
    </button>
  )
}

function InputField(props){
    return (
      <input
        type='text'
        className='form-control'
        placeholder="Riverside, CA"
        onChange={props.onUpdateCity}
        value={props.city}
      />
    )
}

function styles(props){
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 250,
    alignSelf: 'right'
  }
}

function GetCity(props){
  return (
    <div style={styles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city}
      />
      <Button
        onSubmitCity={props.onSubmitCity}
      >
        Search Weather
      </Button>
    </div>
  )
}

module.exports = GetCity;
