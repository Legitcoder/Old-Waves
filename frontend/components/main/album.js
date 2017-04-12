import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {selectAlbum} from '../../actions/index';



class Album extends Component{

   routeToAlbumSongs(){
     const {album} = this.props;
     this.props.selectAlbum(album);
     hashHistory.push(`artists/${album.artist.id}/${album.artist.name}/${album.title.replace(/ /g, '')}`)
   }

  render(){
    const {album} = this.props;
    return(
        <li className="albums">
          <h4>{album.title}</h4>
          <img src={album.small_image} onClick={this.routeToAlbumSongs.bind(this)}></img>
        </li>
    );
  }
}

export default connect(null, {selectAlbum})(Album)
