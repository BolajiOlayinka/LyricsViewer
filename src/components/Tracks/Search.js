import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackTitle: "",
  };
  onChange=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  findTrack=(dispatch,e)=>{
    e.preventDefault();
    // axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=20&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    axios.get(`http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=20&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res=> {
        dispatch({
            type:'SEARCH_TRACKS',
            payload:res.data.message.body.track_list
        })
       
        // this.setState({track_list:res.data.message.body.track_list})
        console.log(res.data)
    })
    .catch(res=> console.log(res.err))
    
  }
  render() {
    return (
      <Consumer>
        {(value) => {
            const {dispatch}=value
          return (
            <div className="card card-body mb-4 mb-xs-2 pb-xs-2 p-4">
              <h1 className="d-md-4 text-center d-xs-2">
                <i className="fas fa-music"></i> Search For A Song
              </h1>
              <p className="text-center">Get the Lyrics For any Song</p>
              <form onSubmit={this.findTrack.bind(this,dispatch)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search For Song Title ..."
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.onChange}
                />
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5 mb-2-xs" type="submit">
                    Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;