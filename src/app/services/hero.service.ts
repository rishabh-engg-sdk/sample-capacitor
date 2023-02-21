import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from "../models/hero";
import {RootService} from "./root.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Echo} from "echo-plugin";
import {MoECapacitorCore} from "capacitor-moengage-core";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, public messageService: RootService) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      Echo.echo({value: `${operation} failed: ${error.message}`});

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => Echo.echo({value: `fetched hero id=${id}`})),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => {
        Echo.echo({value: `updated hero id=${hero.id}`})

        MoECapacitorCore.trackEvent({
          eventName: "HERO_UPDATE",
          eventAttributes: {
            generalAttributes: [
              {name: "hero_name", value: `${hero.name}`},
              {name: "hero_id", value: `${hero.id}`}
            ]
          },
          appId: this.messageService.appId
        })
      }),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => {
        MoECapacitorCore.trackEvent({
          eventName: "HERO_ADD",
          eventAttributes: {
            generalAttributes: [
              {name: "hero_name", value: `${hero.name}`},
              {name: "hero_id", value: `${hero.id}`}
            ]
          },
          appId: this.messageService.appId
        })
        Echo.echo({value: `added hero w/ id=${newHero.id}`})
      }),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => {
        MoECapacitorCore.trackEvent({
          eventName: "HERO_DELETE",
          eventAttributes: {
            generalAttributes: [
              {name: "hero_id", value: `${id}`}
            ]
          },
          appId: this.messageService.appId
        })
        Echo.echo({value: `deleted hero id=${id}`})
      }),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

}
