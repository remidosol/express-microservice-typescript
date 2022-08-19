import { Router } from 'express'

/**
 * @class CommonRoutes
 *
 * @description Has created to provide a COMMON Router to Express Application
 */
export abstract class CommonRoutes {
  constructor(name: string) {
    this.name = name
  }

  name: string

  getName() {
    return this.name
  }

  static getRouter: () => Router
}
