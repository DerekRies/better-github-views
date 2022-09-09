export {};

declare global {
  declare var NODE: boolean;

  namespace NodeJS {
    interface ProcessEnv {}
  }
}
