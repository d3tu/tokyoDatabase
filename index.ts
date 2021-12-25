import fs from 'fs';

export class Database {
  constructor(public path: string) {}
  
  get version() {
    return require("./package.json").version;
  }
  
  get json(): object {
    return fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path, 'utf8')) : {};
  }
  
  set json(obj: object) {
    fs.writeFileSync(this.path, JSON.stringify(obj, undefined, 2));
  }
}

export default Database;
