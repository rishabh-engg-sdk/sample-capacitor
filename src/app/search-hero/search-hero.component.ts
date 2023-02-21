import {Component, OnInit} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {debounce, debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from 'rxjs';
import {Hero} from "../models/hero";

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {


  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {

  }

  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }
}
