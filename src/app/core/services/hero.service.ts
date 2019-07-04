import { Injectable } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HEROES } from '../mocks/hero.mock';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { map } from 'rxjs/operators';
import { HeroesHttpService } from '../http/heroes-http.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private heroesHttpService: HeroesHttpService
    ) {  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetching heroes...');
    return this.heroesHttpService.getHeroes();
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetching hero id=${id}`);
    return this.heroesHttpService.getHero(id);
  }

}