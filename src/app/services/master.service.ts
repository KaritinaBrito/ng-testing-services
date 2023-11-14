import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(
    private valueSErvice: ValueService,
  ) { }

  getValue(){
    return this.valueSErvice.getValue();
  }
}
