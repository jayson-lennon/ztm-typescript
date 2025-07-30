/* eslint-disable */
import { strict as assert } from "assert";

interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`[Email]: ${message}`);
    // In a real app, this would send the message via email.
  }
}

class SMSNotifier implements Notifier {
  send(message: string): void {
    console.log(`[SMS]: ${message}`);
    // In a real app, this would send the message to an SMS service.
  }
}

const emailNotifier = new EmailNotifier();
emailNotifier.send("email message");

const smsNotifier = new SMSNotifier();
smsNotifier.send("text message");


function sendMessage(notifier: Notifier, message: string) {
  notifier.send(message);
}

sendMessage(emailNotifier, "email message");
sendMessage(smsNotifier, "text message");
