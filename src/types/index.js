export type DefaultState = {
  data: Array<{}>,
  loaded: boolean,
  error: boolean
}

export type DefaultAction = {
  type: string,
  payload: {
    data: {} | Array<{}>
  }
}