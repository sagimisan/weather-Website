import React from "react";
import axios from "axios";
import Cards from "./Cards";
import MainCard from "./MainCard";
import SearchBTN from "./SearchBTN";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  showWeather = () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: document.getElementById("selectCity").value === ""
          ? (document.getElementById("selectCity").value = "jerusalem")
          : document.getElementById("selectCity").value, days: '3'
      },
      headers: {
        'x-rapidapi-key': 'bda9c39977msh7f9b3c29900a799p172d33jsne7380b915cce',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({
          error: false,
          data: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error: true
        });
      });
  };

  render() {
    return (
      <div className="Api">
        <div className="searchBox">
          <input
            className="searchBar"
            placeholder="Jerusalem"
            name="cities"
            id="selectCity"
          />
          <div
            style={{ width: "99px", height: "36px" }}
            onClick={this.showWeather}
          >
            <SearchBTN />
          </div>
        </div>
        {this.state.error ? (
          <div>
            <h2 style={{ margin: "30px 0 50px 0" }}>
              There is no information about the selected city
            </h2>
            <h2>Please select a different city</h2>
          </div>
        ) : document.getElementById("selectCity") === null ? (
          <div id="descriptionDiv">
            <h3 style={{ margin: "30px 0 50px 0" }} className="des">
              Select a city and the data will appear here
            </h3>
            <img src="/img/sun-behind-cloud.png" alt="" />
          </div>
        ) : (
              <div>
                <MainCard
                  tempNow={Math.floor(this.state.data.current.temp_c) + "°"}
                  city={this.state.data.location.name}
                  country={this.state.data.location.country}
                  description={this.state.data.current.condition.text}
                  pickData={this.state.data.current.condition.icon}
                />
                {this.state.data.forecast.forecastday.map((data, index) => {
                  if (index != 0) {
                    return (
                      <Cards
                        key={index}
                        tempNow={
                          `min: ${data.day.mintemp_c}°-max: ${data.day.maxtemp_c}`
                        }
                        description={data.day.condition.text}
                        day={data.date}
                        img={data.day.condition.icon}
                      />
                    )
                  }
                }
                )}
              </div>
            )}
      </div>
    );
  }
}
export default Api;