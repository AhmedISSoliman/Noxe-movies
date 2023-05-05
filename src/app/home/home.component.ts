import { MovieService } from './../movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgSrc: string = "https://image.tmdb.org/t/p/w500/";
  movies: any[] = [];
  tvs: any[] = [];
  people: any[] = [];
  unSub: any;
  constructor(private _MovieService: MovieService) { }
  ngOnInit(): void {
    this._MovieService.getTrending("movie").subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies)
    });
    this._MovieService.getTrending("tv").subscribe((data) => {
      this.tvs = data.results.slice(0, 10);
    });
    this._MovieService.getTrending("person").subscribe((data) => {
      this.people = data.results.slice(0, 10);
    });
  }
  // ngOnDestroy(): void {
  //   this.unSub.unsubscribe();
  //   console.log("home destroied")
  // }

}
