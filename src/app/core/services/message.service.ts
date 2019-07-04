import { Injectable } from '@angular/core';
import { Message } from 'src/app/shared/models/message';

@Injectable({
    providedIn: 'root',
})
export class MessageService {

    messages: Message[] = [];

    add(message: string) {
        const message2Input:Message = new Message(message);
        this.messages.push(message2Input);
    }

    clear() {
        this.messages = [];
    }

}