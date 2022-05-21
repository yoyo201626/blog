type Res = {
    code: number,
    data: any,
    msg: string,
}

export type ResItem<T> = {
    data: T,
} & Res

type _page<T> = {
    count: number,
    items: T[],
}
export type ResPage<T> = {
    data: _page<T>
} & Res
