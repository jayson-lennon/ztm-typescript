/* eslint-disable */
import { strict as assert } from "assert";

// Arrays can contain anything, including objects.
type Link = {
  title: string;
  url: string;
};

const microsoft = {
  title: "microsoft",
  url: "microsoft.com",
};

const typescript = {
  title: "TypeScript",
  url: "typecriptlang.org",
};

const sites = [microsoft, typescript];
const tsUrl = sites[1].url;
sites[0].title = "Microsoft";
