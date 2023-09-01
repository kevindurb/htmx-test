import 'reflect-metadata';
import 'dotenv/config';

import { Container } from 'typedi';

import { App } from './App.js';

(function main() {
  Container.set;
  const app = Container.get(App);
  app.start();
})();
