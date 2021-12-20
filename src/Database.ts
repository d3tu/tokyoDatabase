import fs from 'fs';

type Key = string | number;

export default class Database {
  path: string;
  
  constructor(path: string) {
    this.path = path;
  }
  
  get(key: Key) {
    return this.json[key];
  }
  
  get json(): object {
    return fs.exitsSync(this.path) ? JSON.parse(fs.readFileSync(this.path, 'utf8')) : {};
  }
  
  set json(obj: object) {
    fs.writeFileSync(this.path, JSON.stringify(obj, undefined, 2));
  }
}

export { Database };
