import {Component, Input} from '@angular/core';
import {Hero} from '../models/hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../services/hero.service';
import {MoECapacitorCore, MoEProperties} from "capacitor-moengage-core";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  @Input() hero?: Hero

  goBack(): void {
    this.location.back();
    const prop: MoEProperties = {
      generalAttributes: [
        {
          name: 'screen_loaction',
          value: JSON.stringify(this.location)
        }
      ],
      dateTimeAttributes : [
        {
          name : 'event_occur_at',
          value : Date.now().toString()
        }
      ]
    }
    MoECapacitorCore.trackEvent({
      eventName: "BACK_PRESSED",
      eventAttributes: prop,
      appId: this.heroService.messageService.appId
    })
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
      const prop: MoEProperties = {
        generalAttributes: [
          {
            name: 'hero_name',
            value: `${this.hero}`
          }
        ],
        dateTimeAttributes : [
          {
            name : 'event_occur_at',
            value : Date()
          }
        ]
      }
      MoECapacitorCore.trackEvent({
        eventName: "UPDATE_HERO",
        eventAttributes: prop,
        appId: this.heroService.messageService.appId
      })
    }
  }
}
