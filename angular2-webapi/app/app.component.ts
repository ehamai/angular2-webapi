import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MessageService} from './message.service';
import {MessageModel} from './message.model';

@Component({
    selector: 'my-app',
    template: `<h1>{{message}}</h1>`,
    providers: [
        HTTP_PROVIDERS,
        MessageService
    ]
})

export class AppComponent implements OnInit {
    public message = "";

    constructor(private _messageService : MessageService){}

    ngOnInit() {
        this._messageService.getMessage().subscribe(
            mesg => this.message = mesg.message,
            error => alert("Failed to get message"));
    }
}