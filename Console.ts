import { State } from "./State"
import { ConsoleOnState } from "./ConsoleOnState"
import { ConsoleOffState } from "./ConsoleOffState"
import { DiskTrayOpenState } from "./DiskTrayOpen"
import { DiskTrayClosedState } from "./DiskTrayClosed"

export class Console {
  consoleOnState: State
  consoleOffState: State
  consoleState: State
  diskTrayOpenState: State
  diskTrayClosedState: State

  constructor() {
    this.consoleOnState = new ConsoleOnState(this)
    this.consoleOffState = new ConsoleOffState(this)
    this.diskTrayOpenState = new DiskTrayOpenState(this)
    this.diskTrayClosedState = new DiskTrayClosedState(this)

    this.consoleState = this.consoleOffState
  }

  setState(state: State) {
    this.consoleState = state
  }

  powerOn(): void {
    this.consoleState.powerOn()
  }

  powerOff(): void {
    this.consoleState.powerOff()
  }

  openDiskTray() {
    this.consoleState.openDiskTray()
  }

  closeDiskTray() {
    this.consoleState.closeDiskTray()
  }

  getConsoleOnState(): State {
    return this.consoleOnState
  }

  getConsoleOffState() {
    return this.consoleOffState
  }

  getDiskTrayOpenState() {
    return this.diskTrayOpenState
  }

  getDiskTrayClosedState() {
    return this.diskTrayClosedState
  }
}
