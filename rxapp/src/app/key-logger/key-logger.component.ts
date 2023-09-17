import { Component, ViewChild , ElementRef, OnInit, Input } from '@angular/core';
import { filter, from, fromEvent, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css']
})
export class KeyLoggerComponent implements OnInit {
    @ViewChild('keyContainer', { static: true})
    input: ElementRef | undefined 

    @Input() numeric = false 

    keys = ''
    values = from([1, 2, 3])

    ngOnInit(): void {
        const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup')
        logger$.pipe(
            map(evt => evt.key.charCodeAt(0)),
            filter(charCode => {
                console.log('numeric', this.numeric)
                return true
            }),
            filter(charCode => !this.numeric || (charCode >= 48 && charCode <= 57)), // filter to only digits 0-9 if numeric is true
            map(charCode => String.fromCharCode(charCode)), // convert back to string
            tap(charCode => this.keys += charCode),
        ).subscribe()
        // logger$.subscribe(evt => this.keys += evt.key)
        // this.values.subscribe(v => this.keys+= v)
    }

    onNumericChange() { 
        this.numeric = !this.numeric
    }
}
