import "reflect-metadata";
import { injectable } from "inversify";
import { Database } from "./database";
import { container, resetDI } from "./inversify.config";
import { Handler } from "./handler";
import { UserService } from "./user-service";

export const handler = (event: unknown) => {
  const handler = container.get(Handler);
  return handler.handle();
};

async function testing() {
  {
    // setup
    console.log("start test");
    container.snapshot();
    @injectable()
    class Mock {
      loadUser = () => Promise.resolve({ name: "mock", age: 1 });
    }
    container.unbind(Database);
    container.bind<unknown>(Database).to(Mock);
    // call
    const userService = new UserService();
    const user = await userService.getUser();

    console.log(user);

    // restore
    resetDI();
  }
}
testing();
