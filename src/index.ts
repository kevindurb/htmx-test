import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();

import Container from 'typedi';

import { App } from './App';

(function main() {
  const app = Container.get(App);
  app.start();
})();
