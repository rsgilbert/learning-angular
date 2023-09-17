import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxapp';
    title$ = new Observable(observer => {
        setInterval(() => {
            console.log('after 2s')
            observer.next()
        }, 2000)
    })

    private setTitle = () => {
        this.title = 'second title ' + new Date().toISOString()
    }

    private changeTitle(callback: Function) {
        setTimeout(() => {
            callback()
        }, 2000)
    }

    constructor() {
        // this.changeTitle(this.setTitle)
        // this.onComplete().then(this.setTitle)
        // this.title$.subscribe(this.setTitle)
        from(this.onComplete()).subscribe(this.setTitle)
    }
    
    private onComplete() {
        return new Promise<void>(resolve => {
            setInterval(() => {
                console.log('resolving')
                resolve()
            }, 2000)
        })
    }
}
