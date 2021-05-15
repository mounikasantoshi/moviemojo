import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  state = {
    movies: [],
    // movies: [
    //   {
    //     title: "bommarillu",
    //     hero: "Siddharth",
    //     heroine: " Genelia",
    //     description: "family movie",
    //     image:
    //       "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-bommarillu/list/00bommarillu_lis_679901092.jpg",
    //   },
    //   {
    //     title: "bommarillu",
    //     hero: "Siddharth",
    //     heroine: " Genelia",
    //     description: "family movie",
    //     image:
    //       "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-bommarillu/list/00bommarillu_lis_679901092.jpg",
    //   },
    //   {
    //     title: "bommarillu",
    //     hero: "Siddharth",
    //     heroine: " Genelia",
    //     description: "family movie",
    //     image:
    //       "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-bommarillu/list/00bommarillu_lis_679901092.jpg",
    //   },
    //   {
    //     title: "bommarillu",
    //     hero: "Siddharth",
    //     heroine: " Genelia",
    //     description: "family movie",
    //     image:
    //       "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-bommarillu/list/00bommarillu_lis_679901092.jpg",
    //   },
    //   {
    //     title: "bommarillu",
    //     hero: "Siddharth",
    //     heroine: " Genelia",
    //     description: "family movie",
    //     image:
    //       "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-bommarillu/list/00bommarillu_lis_679901092.jpg",
    //   },
    // ],
  };

  getmovies = () => {
    axios.get("/movie").then((res) => {
      this.setState({ movies: res.data });
      console.log(this.state.movies);
    });
  };

  componentDidMount() {
    this.getmovies();
    // console.log(this.props.showSidebar);
  }

  render() {
    return (
      <div class="card-group home ">
        <div
          className="container1"
          style={{
            position: this.props.sidebar === true ? "relative" : "",
            width: this.props.sidebar === true ? "80%" : "",
          }}
        >
          {this.state.movies.map((movie, i) => (
            // <div className="">
            <div
              className="cards"
              style={{
                margin: this.props.sidebar === true ? "30px" : "",
              }}
            >
              <div className="img">
                <img
                  src={movie.image}
                  height="350px"
                  width="100%"
                  alt={movie.title}
                />
              </div>
              <div className="content h4">
                {/* <div className="contentBx1 h4"> */}
                <h4>Movie:</h4>
                <p className="p">{movie.title}</p>

                <h4>
                  Hero:<p className="p">{movie.hero}</p>
                </h4>
                <h4>
                  Heroine:<p className="p">{movie.heroine}</p>
                </h4>
              </div>
            </div>
            // </div>

            // </div>

            // <div class="card container1" width="1px" height="200px">
            //   <img
            //     height="400px"
            //     width="300px"
            //     class="card-img-top "
            //     src={movie.image}
            //     alt={movie.image}
            //   />
            /* <div class="card-body">
              <h5 class="card-title">{movie.description}</h5>
              <p class="card-text">{movie.title}</p>
              <p class="card-text"> 
              <small class="text-muted"></small>
              </p>
            </div> */
            // </div>
          ))}
        </div>
      </div>
    );
  }
}
