import { Component, OnInit, AfterViewInit } from '@angular/core';
import { timer, of, Observable, throwError  } from 'rxjs';

//Observe Timer Example
const source = timer(1000, 2000);

//Basic Subscribing using Observer
const myObservable = of('apple', 'orange', 'grappe');
const myObserver = {
  next: (x: string) => console.log('Observer got a next value: ' + x),
  error: (err: string) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

//Observable with Constructor Example
function sequenceSubscriber(observer) {
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();
  return {unsubscribe() {}};
}


@Component({
  selector: 'app-rxjs-observe-timer',
  templateUrl: './rxjs-observe-timer.component.html',
  styleUrls: ['./rxjs-observe-timer.component.css']
})
export class RxjsObserveTimerComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
    //Observe Timer Example
    const subscribe = source.subscribe(val => console.log(val));
    setTimeout(() => { subscribe.unsubscribe(); }, 10000);

    //Basic Subscribing using Observer
    myObservable.subscribe(myObserver);

    //Observable with Constructor Example
    const sequence = new Observable(sequenceSubscriber);
    sequence.subscribe({
      next(msg) { console.log(msg); },
      complete() { console.log('Finished sequence'); }
    });

  }

  //The Observable that Publishes Events Example
  ngAfterViewInit() {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('yourname') as HTMLInputElement;
    this.fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
      if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
      }
    });
  }

  fromEvent(target: HTMLInputElement, eventName: string) {
    return new Observable((observer) => {
      const handler = (e: unknown) => observer.next(e);

      target.addEventListener(eventName, handler);

      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }
}
