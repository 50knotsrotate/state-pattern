import { State } from "./State";
import { Console } from "./Console";

export class ConsoleOffState implements State {
  console: Console;

  constructor(console: Console) {
    this.console = console;
  }

  powerOn(): void {
    console.log("Powering on...");
    this.console.setState(this.console.getConsoleOnState());
  }
  powerOff(): void {
    // Do nothing
  }
  openDiskTray(): void {
    // Do nothing
  }

  closeDiskTray(): void {
    // Do nothing
  }

  isPoweredOn(): boolean {
    return false;
  }
}
