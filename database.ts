import { provide } from "inversify-binding-decorators";

// eslint-disable-next-line @typescript-eslint/no-use-before-define
@provide(Database)
export class Database {
  constructor() {
    console.log("establishing database connection");
  }

  async loadUser() {
    await new Promise<void>((rs) => setTimeout(() => rs(), 1000));
    return {
      name: "Thomas",
      age: 20
    };
  }
}
