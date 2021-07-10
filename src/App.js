import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Location from './components/Location'

export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      cityData: {},
      locationImage: ''
    }
  }

  handleChange = async (event) => {
    event.preventDefault()

    await this.setState({
      searchQuery: event.target.city.value
    })

    let locationUrl = `http://localhost:3001/location?searchQuery=${this.state.searchQuery}`

    let resData = await axios.get(locationUrl);

    await this.setState({
      cityData: resData.data
    })

    await this.setState({
      locationImage: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`
    })
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
          <input type='text' placeholder='Enter a city name..' name='city'></input>
          <br></br>
          <input type='submit' value='Explore!' name='submit'></input>

          <Location locationImage={this.state.locationImage} title={this.state.cityData.display_name} />
        </form>
      </div>
    )
  }
}

export default App
