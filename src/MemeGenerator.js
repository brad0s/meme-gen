import React from "react"

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      image: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          allMemeImgs: data.data.memes
        })
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault(); //prevent page refreshing
    const randomNum = Math.floor(Math.random() * Math.floor(this.state.allMemeImgs.length))
    const randonMeme = this.state.allMemeImgs[randomNum].url
    this.setState({
      image: randonMeme
    })
  }

  render() {
    return(
      <div className="MemeGenerator">
        <div>
          <h2><span>Create Meme</span></h2>
          <form className="MemeGenerator-form" onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="topText">Top text:</label>
              <input 
                type="text" 
                name="topText" 
                value={this.state.topText} 
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
            <label htmlFor="bottomText">Bottom text:</label>
              <input 
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
            </div>
            <button>Gen</button>
          </form>
        </div>
        <div className="meme">
          <img src={this.state.image} alt="" />
          <h2 className="topText">{this.state.topText}</h2>
          <h2 className="bottomText">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator