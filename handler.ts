import { provide } from "inversify-binding-decorators";
import { Database } from "./database";
import { container } from "./inversify.config";
import { UserService } from "./user-service";

// eslint-disable-next-line @typescript-eslint/no-use-before-define
@provide(Handler)
export class Handler {
  userService = container.get(UserService);
  database = container.get(Database);

  async handle() {
    const user = await this.userService.getUser();
    return { user };
  }
}
