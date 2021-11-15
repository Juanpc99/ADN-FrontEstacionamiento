import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder = '';
  debouncer : Subject<string> = new Subject();
  termino = '';
  constructor() { 
    
  }
  
  ngOnInit() {
    const dbtime = 300;
    this.debouncer.pipe(
      debounceTime(dbtime)
    ).subscribe(
      valor => {
        this.onDebounce.emit(valor);
      });
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
