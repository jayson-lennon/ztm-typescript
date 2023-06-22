/* eslint-disable */
import { strict as assert } from "assert";

import { apiResponse } from "./mylib";

const response = apiResponse();
if (response !== undefined) {
  if (response.status === "success") {
    console.log(response.data.items[1].name);
  }
}

