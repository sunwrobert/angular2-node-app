import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent {

    constructor(private messageService: MessageService){}

    onSave(value: string){
        const message = new Message(value, 'Robert')
        this.messageService.addMessage(message);
    }
}