export class FakeValueService {
  private value = 'my value';
  constructor() { }

  getValue(){
    return 'fake value';
  }

  setValue(value: string){ }

  getPromiseValue(){
    return Promise.resolve('Fake promise value ');
  }
}
