import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useData from '../../hooks/useData';
import { Container,Dimmer,Loader } from 'semantic-ui-react';
import Glide from '../../blog/glide/Glide'

export default function AlbumPage() {
    const gallery = useRef(null);
    const { userId, albumId } = useParams();
    const[photos,isFetching] = useData(`/albums/${albumId}/photos`,[])
    const[albums] = useData(`users/${userId}/albums`, []);
    const[albumName,setAlbumName] = useState('')

    useEffect(()=> {

        //Fetching albumName
        albums.filter( (album) =>{
            if(album.id === +albumId) {
                setAlbumName(album.title)
            }
        })

    },[albumId,albums]);


    return (
        <Container >
            <h2>{albumName}</h2>
            <div className="gallery-grid glide" ref={gallery}>
            <Dimmer active={isFetching} inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
           { photos.length > 0 &&  <Glide options={{ perView: 3 }} bullets={false}>
                { photos.map( (photo) => {
                    return (
                        <a  key={photo.url} href={`${photo.url}`}>
                            <img  src={`${photo.thumbnailUrl}`} alt=""/>
                        </a>
                    )
                     })}
                </Glide> }
            </div>
        </Container>
    )
}