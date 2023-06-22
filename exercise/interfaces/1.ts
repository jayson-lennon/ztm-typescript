// An amusement park operator is rolling out a new line-priority scheme where
// people can get priority ride access based on their ticket. The operator
// needs a program to determine if the person is allowed to use the priority
// line based on various conditions. 
//
// The park has these kinds of tickets:
// - "Standard"
// - "Premium"
// - "Member"
// - "VIP"
//
// Access to the priority line is governed by these rules:
// - Standard tickets get no priority access
// - Premium tickets can access the priority line only on weekdays
// - Member tickets can access the priority line on weekends and weekdays
// - VIP tickets can access the priority line at any time
//
// The data provided as a `day` in the interface is:
// - "weekday" for weekdays
// - "weekend" for weekends
// - "holidays" for holidays
//
// For each kind of ticket, create a class. Each class must implement the
// `PriorityAccess` interface and adhere to the rules described above.
//
// To confirm that your code works, perform the following:
// 1. Create a standard ticket and assert that it cannot access the priority
//    line
// 2. Create a premium ticket and assert that it can only access the priority
//    line when the day is "weekday"
// 3. Create a member ticket and assert that it can only access the priority
//    line when the day is "weekday" or "weekend"
// 4. Create a VIP ticket and assert that it can always access the priority
//    line

import { strict as assert } from "assert";

interface PriorityAccess {
  hasPriorityAccess(day: string): boolean;
}

class StandardTicket implements PriorityAccess {
  hasPriorityAccess(day: string): boolean {
    return false;
  }
}

class PremiumTicket implements PriorityAccess {
  hasPriorityAccess(day: string): boolean {
    return day === "weekday";
  }
}

class MemberTicket implements PriorityAccess {
  hasPriorityAccess(day: string): boolean {
    switch (day) {
      case "weekday":
      case "weekend":
        return true;
      default:
        return false;
    }
  }
}

class VIPTicket implements PriorityAccess {
  hasPriorityAccess(day: string): boolean {
    return true;
  }
}

const standard = new StandardTicket();
assert.equal(standard.hasPriorityAccess("weekday"), false);
assert.equal(standard.hasPriorityAccess("weekend"), false);
assert.equal(standard.hasPriorityAccess("holiday"), false);

const premium = new PremiumTicket();
assert.equal(premium.hasPriorityAccess("weekday"), true);
assert.equal(premium.hasPriorityAccess("weekend"), false);
assert.equal(premium.hasPriorityAccess("holiday"), false);

const member = new MemberTicket();
assert.equal(member.hasPriorityAccess("weekday"), true);
assert.equal(member.hasPriorityAccess("weekend"), true);
assert.equal(member.hasPriorityAccess("holiday"), false);

const vip = new VIPTicket();
assert.equal(vip.hasPriorityAccess("weekday"), true);
assert.equal(vip.hasPriorityAccess("weekend"), true);
assert.equal(vip.hasPriorityAccess("holiday"), true);
