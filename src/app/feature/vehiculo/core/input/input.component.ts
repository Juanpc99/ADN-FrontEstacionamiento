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

  @Input() placeholder: string = '';
  debouncer : Subject<string> = new Subject();
  termino: string = '';
  dbtime: number = 300;
  constructor() { 
    
  }

  ngOnInit() {
    this.debouncer.pipe(
      debounceTime(this.dbtime)
    ).subscribe(
      valor => {
        this.onDebounce.emit(valor);
      }
    )
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
