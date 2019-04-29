import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movieDetails: any;
  constructor(private activatedRoute: ActivatedRoute, private movieServices: MovieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieServices.getDetails(id).subscribe(results => {
      this.movieDetails = results;
    });
  }

  openWebsite() {
    window.open(this.movieDetails.Website, '_blank');
  }
}
