import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoverService {
  private hoverSource = new BehaviorSubject<boolean>(false);
  hover$ = this.hoverSource.asObservable();

  setHoverState(state: boolean) {
    this.hoverSource.next(state);
  }
}
