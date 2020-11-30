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

    /**
     * Publish and event to the given listeners
     * @param event - The event to publish to
     * @param data - The data to send
     */
    publish(event: string, data: { [key: string]: any } | any = {}): void {
        if (!(event in this.events)) {
            this.createEvent(event);
        }

        this.events[event].next(data);
    }

    /**
     * Listener to an event. Events with this name will trigger the provided callback
     * @param event - The event to listen for
     * @param callback - The event callback
     */
    listen(event: string, callback: (data) => void): void {
        if (!(event in this.events)) {
            this.createEvent(event);
        }

        this.events[event].subscribe(callback);
    }

    private createEvent(event: string): void {
        this.events[event] = new ReplaySubject<any>(null);
    }

    ngOnDestroy() {
        Object.keys(this.events).forEach(key => {
            this.events[key].unsubscribe();
        });
    }
}
