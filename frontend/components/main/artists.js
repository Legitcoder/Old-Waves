import React, {Component} from 'react';
import { connect } from 'react-redux';
import Artist from './artist'
import { fetchArtists } from '../../actions/index';

class Artists extends Component{
  componentDidMount(){
    this.props.fetchArtists();
  }
    render(){
        return(
        <div>
        <div className="row">
          <div className="col-md-9 col-centered">
            <h1>Artists</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-centered">
          <ul>
          {
              this.props.artists.map(artist =>{
                return(<Artist artist={artist} key={artist.id} />);
              })
          }
          </ul>
          </div>
        </div>
        </div>
          );
      }
  }



const mapStateToProps = (state) =>{
  return {artists: state.artists.all}
}

export default connect(mapStateToProps, {fetchArtists})(Artists)
