import { Component,  OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../Artist';
import {Album} from '../../Album';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit{
  id:string;
  album: Album[];

  constructor(private _route:ActivatedRoute,
              private _spotifySvc:SpotifyService){

  }
  ngOnInit(){
    this._route.params
      .map(params => params['id'])
      .subscribe((id)=>{
        this._spotifySvc.getAlbum(id)
          .subscribe(album=>{
            this.album = album
          })
      })
  }


}
