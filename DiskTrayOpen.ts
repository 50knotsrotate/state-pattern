import { State } from "./State"
import { Console } from "./Console"

export class DiskTrayOpenState implements State {
  console: Console

  constructor(console: Console) {
    this.console = console
  }

  powerOn() {
    console.log("Power is already on...")
  }

  powerOff(): void {
    console.log("Please close the disk tray before turning off...")
  }

  openDiskTray() {
    console.log("Disk tray is already open...")
  }

  closeDiskTray() {
    console.log("Closing disk tray...")
    this.console.setState(this.console.getDiskTrayClosedState())
  }
}
