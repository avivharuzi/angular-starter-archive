export class Message {
  public type: string;
  public message: any;
  public isOpen: boolean;

  public constructor (
    _type: string, _message: string
  ) {
    this.type = _type;
    this.message = _message;
    this.isOpen = true;
  }
}
