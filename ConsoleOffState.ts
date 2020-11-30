import { State } from "./State"
import { Console } from "./Console"

export class ConsoleOffState implements State {
  console: Console

  constructor(console: Console) {
    this.console = console
  }

  powerOn() {
    console.log("Powering on...")
    this.console.setState(this.console.consoleOnState)
  }
  powerOff(): void {
    console.log("The console is already off...")
  }
  openDiskTray() {
    console.log("Cannot open disk tray if console is off...")
  }

  closeDiskTray() {
    console.log("Cannot close disk tray if console is off...")
  }
}
