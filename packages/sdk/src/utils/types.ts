// Make some properties on the given type optional
export type PartialPick<TObject extends object, TOptional extends keyof TObject> = Prettify<
  Pick<TObject, Exclude<keyof TObject, TOptional>> & Partial<Pick<TObject, TOptional>>
>;

// Flatten all type properties into a human readable format.
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
