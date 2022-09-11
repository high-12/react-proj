class MagicEightBall extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: 0
      }
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    
    render() {
      const possibleAnswers = [
        '8',
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      
      const answer = possibleAnswers[this.state.randomIndex];
      
      return (
        <div>
          
          <div className="question-container">
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.handleChange}
              />
            <button onClick={this.ask}>
              Ask the Magic Eight Ball!
            </button>
          </div>
          
          <div className="ball-container">
            <div className="ball-black-outer">
              <div className="ball-white-inner">
                <div>
                  { (answer !== '8') ?
                    answer
                   :
                    <div className='eight'>8</div>
                  }
                </div>
              </div>
            </div>
            <div className="ball-shadow"></div>
          </div>
          
        </div>
      );
    }
  };
  
  
  class App extends React.Component {
    render() {
      return (
        <MagicEightBall/>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("Magic Eight Ball"));
  