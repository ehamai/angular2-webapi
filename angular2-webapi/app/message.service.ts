import {Injectable} from 'angular2/core';
import {Http}       from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {MessageModel} from './message.model';

@Injectable()
export class MessageService {
    constructor(private _http: Http) { }

    private _url = 'api/message';

    getMessage() : Observable<MessageModel> {
        return this._http.get(this._url)
            .map((res) => {
                return <MessageModel>res.json().data;
            })
            .catch(this.logAndPassOn);
    }

    private logAndPassOn(error: Error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error);
    }
}