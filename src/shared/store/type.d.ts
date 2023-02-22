export type TStorageEvent = {
  target: Window | HTMLElement | Element;
  event: keyof WindowEventMap;
  callback: EventListener;
};

abstract class Storage<StoreItem> {
  private #storage: typeof Map;
  private #chain = <T>(fn: T) => this;

  public clear = () => this;
  public removeItem = (key: string) => this;
  public push = (value: StoreItem) => this;
  public setItem = (key: string, value: StoreItem) => this;
}

export type LocalStorage = Storage<any>;
export type EventStorage = Storage<TStorageEvent>;
