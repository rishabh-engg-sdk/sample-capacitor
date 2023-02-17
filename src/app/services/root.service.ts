import {Injectable} from '@angular/core';
import {MyPlugin} from "my-plugin";
import {MoECapacitorCore} from "capacitor-moengage-core";
import {AppComponent} from "../app.component";
import {AppModule} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class RootService {

  messages: string[] = []
  appId = "DAO6UGZ73D9RTK8B5W96TPYN"

  constructor() {
  }

  add(message: string) {
    this.messages.push(message);
    MyPlugin.echo({value: message})
  }

  clear() {
    this.messages = [];
    MoECapacitorCore.trackEvent({
      eventName : "CLEAR_MESSAGES",
      eventAttributes : undefined,
      appId : this.appId
    })
  }
}
