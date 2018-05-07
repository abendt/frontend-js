// @flow strict

export default class MyClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  nonArrow() {
    console.log('non-arrow', this);
    return this.name;
  }

  arrow = () => {
    console.log('arrow', this);
    return this.name;
  }

  plainFunction = function () {
    console.log('plain', this);
    return this.name;
  }
}
