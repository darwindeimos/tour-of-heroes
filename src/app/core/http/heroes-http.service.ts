import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../services/message.service';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/shared/models/hero';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesHttpService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroesHttpService: ${message}`);
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log(`fetched hero with name=${hero.name} and id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => this.logFetchedHeroes(heroes)),
      map(heroes => this.modifyHeroes(heroes)),
      catchError(this.handleError<Hero[]>('getHeroes', []))

    );
  }

  private logFetchedHeroes(heroes: Hero[]) {
    let heroNames: string[] = [];
    heroes.forEach(hero => {
      heroNames.push(hero.name);
    });
    this.log(heroNames.toString());
  }

  private modifyHeroes(heroes: Hero[]): Hero[] {
    heroes.forEach(hero => {
      hero.name = `${hero.name} / DRMP`;
    });
    return heroes;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
