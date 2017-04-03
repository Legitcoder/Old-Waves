import React, {Component} from 'react';
import { connect } from 'react-redux';
import Artist from './artist'
import { fetchArtists } from '../../actions/index';

class Artists extends Component{
  componentDidMount(){
    this.props.fetchArtists();

  }
    render(){
      if(!this.props.artists){
        return <div>Loading</div>;
      }
      else{
        return(
          <ul>
          {
              this.props.artists.map(artist =>{
                return(<Artist artist={artist} key={artist.id} />);
              })
          }
          </ul>
          );
        }
      }
  }



const mapStateToProps = (state) =>{
  //console.log(state.artists.all)
  return {artists: state.artists.all}
}

export default connect(mapStateToProps, {fetchArtists})(Artists)
