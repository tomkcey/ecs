import { componentIdGenerator, noop } from "./utils";

export type EntityComponentMapper<T extends Component = Component> = Map<number, T[]>;

export type ComponentCommand<T = unknown> = { from: number; data: T };

export abstract class Component {
  constructor(
    public pub: (msg: unknown) => void = noop,
    public sub: (command: ComponentCommand) => void = noop,
    public id: number = generateComponentId()
  ) {}
}

function generateComponentId(): number {
  return componentIdGenerator.next().value;
}
