import { Component } from '@angular/core';
import { Message } from './messages/message';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    message: Message = new Message('The content', 'Robert');
}