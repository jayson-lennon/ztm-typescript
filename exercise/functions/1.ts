// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

function first_name(first_name){
    return first_name;
}

function last_name(last_name){
    return last_name;
}

function full_name(first, last){
    console.log(`Full name is ${first_name(first)} ${last_name(last)}`)
}

full_name("Emmanuel", "Asomuyide")