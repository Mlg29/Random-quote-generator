import React from "react"
import "./container.css"


class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            quotes: "",
            author: "",
            
        }
      this.ReceiveData = this.ReceiveData.bind(this)
    }

    componentDidMount() {
        this.ReceiveData()
    }
    
    ReceiveData() {
            fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then(result => result.json())
            .then(data => {
                const randomQuote = Math.floor(Math.random() * data.quotes.length);            
                this.setState({
                  quotes: data.quotes[randomQuote].quote,
                  author: data.quotes[randomQuote].author
                });
              });
          };
        
    

    render() {
            return (
            <div className="container">
                <h1 className="text">"{this.state.quotes}"</h1>
                <p className="paragraph">--{this.state.author}</p>
                <div>
                    <button className="btn1" type="button">Tweet</button>
                    <button className="btn2" type="button">Follow</button>
                    <button onClick={this.ReceiveData} className="btn" type="button" >New Quote</button>
                </div>
            </div>
        )
    }
    
}



export default Container