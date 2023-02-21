import {Component} from '@angular/core';
import {RootService} from "../services/root.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: RootService) {
  }
}
