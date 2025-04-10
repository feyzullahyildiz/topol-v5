export interface BaseNode<T> {
  id: string;
  props: T;
  atRoot: boolean;
}
