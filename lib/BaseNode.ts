type Mode = 'Layout' | 'Widget';
export interface BaseNode<T, K = Mode> {
  id: string;
  props: T;
  atRoot: boolean;
  mode: K;
}

export type BaseLayoutNode<T> = BaseNode<T, 'Layout'>;
export type BaseWidgetNode<T> = BaseNode<T, 'Widget'>;
