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
          <h1 className="section-title">Artists</h1>
          <ul>
          {
              this.props.artists.map(artist =>{
                return(<Artist artist={artist} key={artist.id} />);
              })
          }
          </ul>
          </div>
          );
      }
  }



const mapStateToProps = (state) =>{
  return {artists: state.artists.all}
}

export default connect(mapStateToProps, {fetchArtists})(Artists)
