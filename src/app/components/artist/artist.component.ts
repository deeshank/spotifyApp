import { Component,  OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../Artist';
import {Album} from '../../Album';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit{
    id:string;
    artist: Artist[];
    albums: Album[];

    constructor(private _spotifySvc: SpotifyService,
                private _route:ActivatedRoute) {

    }

    ngOnInit(){
        this._route.params
              .map(params => params['id'])
              .subscribe((id) => {
                  this._spotifySvc.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist
                      })
                  this._spotifySvc.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items
                    })
              });
    }

}
