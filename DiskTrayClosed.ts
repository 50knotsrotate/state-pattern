import { State } from "./State"
import { Console } from "./Console"

export class DiskTrayClosedState implements State {
  console: Console

  constructor(console: Console) {
    this.console = console
  }

  powerOn() {
    console.log("Power is already on...")
  }
  powerOff(): void {
      console.log("Powering off...")
      this.console.setState(this.console.getConsoleOffState())
  }
  openDiskTray() {
      console.log("Disk tray opening...")
      this.console.setState(this.console.getDiskTrayOpenState())
  }

  closeDiskTray() {
    console.log("Disk tray is already closed...")
  }
}
