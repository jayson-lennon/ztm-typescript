/* eslint-disable */
import { strict as assert } from "assert";

//NOT
const writing = true;
const reading = !writing;
assert.equal(reading, false);

//OR
const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie;
//compund boolean expression 
//pipes mean OR -- when first expression evaluates to true, then the second expression is omitted

assert.equal(suggestMovie, true);

//AND  when is false, the && is omitted
const age = 18;
const isTeenager = age >= 13 && age <= 20;
assert.equal(isTeenager, true);


// our package example 
const packageWeight = 30;   
const packageLength = 50;
const feeExemption = false;

const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);

//when we have more then one and or 'or' then we likely need to do this 
