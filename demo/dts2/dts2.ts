/* eslint-disable */
import { strict as assert } from 'assert';

// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
//

import { apiResponse } from './mylib';

const response = apiResponse();

if (response !== undefined) {
  if (response.status === 'success') {
    const items = response.data.items;
    console.log(items); // items;
  } else {
    console.log('Error: ' + response.status);
  }
}

if (response !== undefined) {
  for (const department of response.data.items) {
    console.log(department.department);
  }
}
