export type Writeable<T> = {
  -readonly [K in keyof T]:T[K]
}

export type Nullable<T> = T | null | undefined