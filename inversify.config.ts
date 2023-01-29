import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

export type Ctor<T = unknown> = new (...args: never[]) => T;

export const container = new Container();
container.load(buildProviderModule());

export function resetDI() {
  container.unbindAll();
  container.load(buildProviderModule());
}
