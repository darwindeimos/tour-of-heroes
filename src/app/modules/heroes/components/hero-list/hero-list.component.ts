import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/core/services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.messageService.add("HeroListComponent: Fetching heroes...")
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
    );
  }
}
