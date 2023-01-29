import { provide } from "inversify-binding-decorators";
import { Database } from "./database";
import { container } from "./inversify.config";

// eslint-disable-next-line @typescript-eslint/no-use-before-define
@provide(UserService)
export class UserService {
  private database = container.get(Database);

  async getUser() {
    const user = await this.database.loadUser();
    return user;
  }
}
