import {Component, OnInit} from '@angular/core';
import {MoECapacitorCore} from "capacitor-moengage-core";
import {Echo} from "echo-plugin";
import {Activity} from "activity-plugin";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SampleHybridApp';
  tag = "AppComponent"
  appId = "DAO6UGZ73D9RTK8B5W96TPYN"

  ngOnInit(): void {

    Activity.registerForActivityCallbacks()
    Activity.addListener(
      "onActivityResumed",
      (activityData)=>{
        Echo.echo({value :  `onActivityResume() : ${JSON.stringify(activityData)}`})
        MoECapacitorCore.showInApp({appId : this.appId})
      }
    )

    MoECapacitorCore.addListener("pushTokenGenerated", (moEPushTokenData) => {
      Echo.echo({"value": `${this.tag} pushTokenGenerated: ${JSON.stringify(moEPushTokenData)}`})
    })
    MoECapacitorCore.addListener("pushClicked", (moEPushCampaignData) => {
      Echo.echo({"value": `${this.tag} pushClicked : ${JSON.stringify(moEPushCampaignData)}`})
    })
    MoECapacitorCore.addListener("inAppCampaignClicked", (moEInAppCampaignData) => {
      Echo.echo({"value": `${this.tag} inAppCampaignClicked : ${JSON.stringify(moEInAppCampaignData)}`})
    })
    MoECapacitorCore.addListener("inAppCampaignShown", (moEInAppCampaignData) => {
      Echo.echo({"value": `${this.tag} inAppCampaignShown : ${JSON.stringify(moEInAppCampaignData)}`})
    })
    MoECapacitorCore.addListener("inAppCampaignDismissed", (moEInAppCampaignData) => {
      Echo.echo({"value": `${this.tag} inAppCampaignDismissed : ${JSON.stringify(moEInAppCampaignData)}`})
    })
    MoECapacitorCore.addListener("inAppCampaignCustomAction", (moEInAppCampaignData) => {
      Echo.echo({"value": `${this.tag} inAppCampaignCustomAction : ${JSON.stringify(moEInAppCampaignData)}`})
    })
    MoECapacitorCore.addListener("inAppCampaignSelfHandled", (moEInAppCampaignData) => {
      Echo.echo({"value": `${this.tag} inAppCampaignClicked : ${JSON.stringify(moEInAppCampaignData)}`})
    })
    MoECapacitorCore.addListener("onPermissionResult", (moEPermissionData) => {
      Echo.echo({value: JSON.stringify(moEPermissionData)})
    })

    MoECapacitorCore.setUniqueId({
      uniqueId: 'rharish991555@gmail.com',
      appId: this.appId
    })
    MoECapacitorCore.setFirstName({firstName: "Rishabh", appId: this.appId})
    MoECapacitorCore.setLastName({lastName: "Harish", appId: this.appId})
    MoECapacitorCore.setMobileNumber({mobileNumber: "9915550789", appId: this.appId},)
    MoECapacitorCore.requestPushPermissionAndroid()
    MoECapacitorCore.initialize({appId: this.appId})
    Echo.echo({"value": `${this.tag} ngOnInit(): MoEngage instance initialized successfully`});

  }

}
