// You are working on a simple access control system that determines whether a
// user has the necessary permissions to access certain features of a website.
// The system checks various conditions such as the user's role, whether they
// are logged in, and whether they have accepted the terms and conditions.
// You'll use Boolean logic to evaluate these conditions and make access
// decisions.
//
// Requirements:
// - For each scenario below, create a boolean expression that evaluates to
//   `true` whenever the user can access the feature, and `false` whenever the
//   user is denied access to the feature:
//   1. When the user is logged in and has accepted the terms, then they can
//      access the feature.
//   2. When the user is logged in but has _not_ accepted the terms, then they
//      _cannot_ access the feature.
//   2. When the user is logged in and is an admin, they can access the feature

/* eslint-disable */

import { strict as assert } from "assert";

// Scenario 1
const isLoggedIn1 = true;
const hasAcceptedTerms1 = true;
const isAdmin1 = false;

const hasAccess1 = (isLoggedIn1 && hasAcceptedTerms1) || isAdmin1;
assert.equal(hasAccess1, true);  // Should be true since the user is logged in and has accepted terms


// Scenario 2
const isLoggedIn2 = true;
const hasAcceptedTerms2 = false;
const isAdmin2 = false;

const hasAccess2 = (isLoggedIn2 && hasAcceptedTerms2) || isAdmin2;
assert.equal(hasAccess2, false);  // Should be false since the user has not accepted terms and is not an admin


// Scenario 3
const isLoggedIn3 = false;
const hasAcceptedTerms3 = false;
const isAdmin3 = true;

const hasAccess3 = (isLoggedIn3 && hasAcceptedTerms3) || isAdmin3;
assert.equal(hasAccess3, true);  // Should be true since the user is an admin


