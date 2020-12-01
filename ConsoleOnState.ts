import { State } from "./State";
import { Console } from "./Console";

export class ConsoleOnState implements State {
  console: Console;

  constructor(console: Console) {
    this.console = console;
  }

  powerOn() {
    // Do nothing
  }
  
  powerOff() {
    console.log("Powering off...");
    this.console.setState(this.console.getConsoleOffState());
  }

  isPoweredOn() {
    return true;
  }
}
