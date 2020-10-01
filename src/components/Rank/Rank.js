import React from 'react';

class Rank extends React.Component  {

  constructor() {
    super();
    this.state = {
      emoji: ''
    }
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name === this.props.name && prevProps.entries === this.props.entries) {
        return null

    }
      this.generateEmoji(this.props.entries);
  }

  generateEmoji = (entries) => {
    //http endpoint will trigger AWS lamda function rank, and then get emoji back from it
    fetch(`https://6kf63uukih.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(response => response.json())
      .then(data =>this.setState({emoji: data.input}))
  }

  render () {

    return (
    <div>
      <div className='white f3'>
        {`${this.props.name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {this.props.entries}
      </div>
      <div className='white f3'>
        {`Rank Badge: ${this.state.emoji}`}
      </div>
    </div>
    )
  
  }
 
}
  


export default Rank;