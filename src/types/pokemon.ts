export class Pokemon {
  constructor(
    private _id: number,
    private _name: string,
    private _img: string,
    private _type: Array<string>
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get img(): string {
    return this._img;
  }

  public set img(img: string) {
    this._img = img;
  }

  public get type(): Array<string> {
    return this._type;
  }

  public set type(type: Array<string>) {
    this._type = type;
  }
}
