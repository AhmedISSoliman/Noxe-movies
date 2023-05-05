import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss']
})
export class MoviesdetailsComponent implements OnInit {
  movieDetails: any = {};
  id:string = "";
    imgSrc: string = "https://image.tmdb.org/t/p/w500/";

  constructor(private _ActivatedRoute: ActivatedRoute, private _MovieService: MovieService) {
  
    this.id =  _ActivatedRoute.snapshot.params["id"];
    _MovieService.getMoviesDetails(this.id).subscribe((data) => {
      
      this.movieDetails = data;
    })
  }

  ngOnInit(): void {
  }

}
