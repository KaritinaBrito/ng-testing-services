import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ValueService ]
    });
    service: TestBed.inject(ValueService);
  })

  it('should be create', () => {
    service = new ValueService();
    expect(service).toBeTruthy();
  });

  describe('Tests for getValue', () => {
    it('Should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
    })
  });

  describe('Tests for setValue', () => {
    it('Should change the value', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');

    })
  });

  describe('Tests for getPromiseValue', () => {
    it('Should return "promise value" from promise with then ', (doneFn) => {
      service.getPromiseValue()
      .then((value)=>{
        //assert
        expect(value).toBe('Promise value');
        doneFn();
      })
    })

    it('Should return "promise value" from promise woth async', async () => {
      const rta = await service.getPromiseValue();
      expect(rta).toBe('Promise value');
      })
    })

  describe('Tests for getObeservableValue', () => {
    it('Should return "getObeservableValue"', (doneFn) => {
      service.getObeservableValue()
      .subscribe((value) => {
        expect(value).toBe('Observable value');
        doneFn();
      })
    })

    it('Should return "getObeservableValue"', async() => {
      service.getObeservableValue()
      .subscribe((value) => {
        expect(value).toBe('Observable value')
      })
    })
  })
});
