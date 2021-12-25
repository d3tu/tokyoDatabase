import fs from 'fs';

type Key = string | number;

export default class Database {
  path: string;
  
  constructor(path: string) {
    this.path = path;
  }
  
  get json(): object {
    return fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path, 'utf8')) : {};
  }
  
  set json(obj: object) {
    fs.writeFileSync(this.path, JSON.stringify(obj, undefined, 2));
  }
  
  get version() {
    return require("./package.json").version;
  }

  get name() {
    return require("./package.json").name;
  }

  get all() {
    return this.json;
  }
}