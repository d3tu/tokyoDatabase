import fs from 'fs';

export default class Database {
  path: string;
  json: any;  
  constructor(path: string) {
    this.path = path;
  }
  get(add) {
    this.json = JSON.parse(fs.readFileSync(this.path, { encoding: "utf-8" }))
  }
}

export { Database };