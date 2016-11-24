import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message';
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {
    @Input()
    message: Message;

    @Output()
    editClicked = new EventEmitter<string>();

    color = 'red'
    onEdit(){
        this.editClicked.emit('new edit emitted');
    }
}