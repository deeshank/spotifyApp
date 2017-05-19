import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../Artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
      searchStr:string;
      searchRes: Artist[];

      constructor(private _spotifySvc: SpotifyService){

      }

      searchMusic(){
        this._spotifySvc.searchMusic(this.searchStr).subscribe(res => {
          this.searchRes = res.artists.items;
        });
      }
}
