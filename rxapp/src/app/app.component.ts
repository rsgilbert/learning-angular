import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'rxapp';

    private setTitle = () => {
        this.title = 'second title'
    }

    private changeTitle(callback: Function) {
        setTimeout(() => {
            callback()
        }, 2000)
    }

    constructor() {
        this.changeTitle(this.setTitle)
    }
    
}
