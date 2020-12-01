import { State } from "./State";
import { Console } from "./Console";

export class ConsoleOnState implements State {
  console: Console;

  constructor(console: Console) {
    this.console = console;
  }

  powerOn() : void {
    // Do nothing
  }
  
  powerOff() : void {
    console.log("Powering off...");
    this.console.setState(this.console.getConsoleOffState());
  }

  isPoweredOn() : boolean {
    return true;
  }
}
