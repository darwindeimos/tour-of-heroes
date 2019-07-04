import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  messageNumber:number;

  public messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  ngOnInit() {
    this.messageNumber=this.messageService.messages.length;
  }

}
