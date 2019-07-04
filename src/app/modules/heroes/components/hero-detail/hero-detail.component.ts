import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/core/services/hero.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.hero$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.heroService.getHero(+params.get('id'))
      )
    );
  }

  gotoHeroes(hero: Hero): void {
    let heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }

  goBack():void{
    this.location.back();
  }
}
