import { Component } from '@angular/core';
import { Message } from './messages/message';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messages: Message[] = [
        new Message('The content', 'Robert'),
        new Message('The content2', 'Robert')
    ]
}