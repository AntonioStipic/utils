import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Event implements OnDestroy {

    events: { [key: string]: ReplaySubject<any> };

    constructor() {
        this.events = {};
    }

    publish(event: string, data: { [key: string]: any } | any = {}): void {
        if (!(event in this.events)) {
            this.createEvent(event);
        }

        this.events[event].next(data);
    }

    listen(event: string, callback: (data) => void): void {
        if (!(event in this.events)) {
            this.createEvent(event);
        }

        this.events[event].subscribe(callback);
    }

    createEvent(event: string): void {
        this.events[event] = new ReplaySubject<any>(null);
    }

    ngOnDestroy() {
        Object.keys(this.events).forEach(key => {
            this.events[key].unsubscribe();
        });
    }
}
