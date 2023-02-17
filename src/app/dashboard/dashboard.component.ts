import {Component} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";
import {MoECapacitorCore} from "capacitor-moengage-core";
import {MyPlugin} from "my-plugin";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[] = [];
  tag = "DashboardComponent"

  ngOnInit() {
    MoECapacitorCore.addListener("pushTokenGenerated", (moEPushTokenData) => {
      MyPlugin.echo({"value": `${this.tag} pushTokenGenerated: ${moEPushTokenData}`})
    })
    MoECapacitorCore.addListener("pushClicked", (moEPushCampaignData) => {
      MyPlugin.echo({"value": `${this.tag} pushClicked : ${moEPushCampaignData}`})
    })
    MoECapacitorCore.addListener("inAppCampaignClicked", (moEInAppCampaignData) => {
      MyPlugin.echo({"value": `${this.tag} inAppCampaignClicked : ${moEInAppCampaignData}`})
    })
    MoECapacitorCore.addListener("inAppCampaignShown", (moEInAppCampaignData) => {
      MyPlugin.echo({"value": `${this.tag} inAppCampaignShown : ${moEInAppCampaignData}`})
    })
    MoECapacitorCore.addListener("inAppCampaignDismissed", (moEInAppCampaignData) => {
      MyPlugin.echo({"value": `${this.tag} inAppCampaignDismissed : ${moEInAppCampaignData}`})
    })
    MoECapacitorCore.addListener("inAppCampaignCustomAction", (moEInAppCampaignData) => {
      MyPlugin.echo({"value": `${this.tag} inAppCampaignCustomAction : ${moEInAppCampaignData}`})
    })
    MoECapacitorCore.addListener("inAppCampaignSelfHandled", (moEInAppCampaignData) => {
      MyPlugin.echo({"value": `${this.tag} inAppCampaignClicked : ${moEInAppCampaignData}`})
    })
    MoECapacitorCore.initialize({appId: this.heroService.messageService.appId})
      .then(() => {
        MyPlugin.echo({"value": `${this.tag} ngOnInit(): MoEngage instance initialized successfully`});
        MoECapacitorCore.setUniqueId({uniqueId: 'rharish991555@gmail.com', appId: this.heroService.messageService.appId})
        MoECapacitorCore.setFirstName({firstName: "Rishabh", appId: this.heroService.messageService.appId})
        MoECapacitorCore.setLastName({lastName: "Harish", appId: this.heroService.messageService.appId})
        MoECapacitorCore.setMobileNumber({mobileNumber: "9915550789", appId: this.heroService.messageService.appId},)
        MoECapacitorCore.requestPushPermissionAndroid().then(() => {
          MoECapacitorCore.setupNotificationChannelsAndroid();
        })
      })

    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
