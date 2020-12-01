import { State } from "./State"
import { Console } from "./Console"
import { DiskTray } from './DiskTray';

export class ConsoleOffState implements State {
  console: Console

  constructor(console: Console) {
    this.console = console
  }

  powerOn() {
    console.log("Powering on...")
    this.console.setState(this.console.getConsoleOnState())
  }
  powerOff(): void {
   // Do nothing
  }
  openDiskTray() {
    // Do nothing
  }

  closeDiskTray() {
    // Do nothing
  }

  isPoweredOn() { 
    return false;
  }
}
