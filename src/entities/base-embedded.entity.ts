export class BaseEmbeddedEntity<P> {
  constructor(props?: Partial<P>) {
    Object.assign(this, props);
  }
}
