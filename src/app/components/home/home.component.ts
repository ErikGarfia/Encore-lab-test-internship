import { Component, OnInit } from '@angular/core';
import { EndpointAPIService } from '../../services/endpoint-api.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  photos: any[] = [];
  max: number = 1083;
  min: number = 0;
  loremText: any[] = [];
  filterTerm: string;
  fav = [];
  flag: number = 0;
  favorites;

  constructor(private service: EndpointAPIService) { }

  async ngOnInit() {
    this.generateJson();
  }

  getFavs(){
    this.flag = 1;
    let string = localStorage.getItem('myFavorites');
    this.favorites = JSON.parse(string);
  }

  backFavs(){
    this.flag = 0;
  }

  async addFavorites(id){
    await this.service.getPhoto(id).subscribe((data) => {
      this.fav.push(data);
      localStorage.setItem('myFavorites', JSON.stringify(this.fav));
    })
  }


  async generateRandomText() {
    for (let i = 0; i < 40; i++) {
      await this.service.loremText().subscribe((data) => { 
        this.loremText.push(data);
      })
    } 
  }

  async generateJson() {
    for (let i = 0; i < 40; i++) {
      await this.service.getPhotos().subscribe((data) => {
        this.photos.push(data);
      })
    }
    this.generateRandomText();
  }
}
