import { State } from './State'
import { Console } from './Console'

export class ConsoleOnState implements State {
  console: Console

  constructor(console: Console) {
    this.console = console
  }

  powerOn() {
    console.log("The console is already on...")
  }
  powerOff() {
    console.log("Powering off...")
    this.console.setState(this.console.getConsoleOffState())
  }
  openDiskTray() {
    console.log("Opening disk tray...")
    this.console.setState(this.console.getDiskTrayOpenState())
  }

    closeDiskTray() {
        console.log('Closing disk tray...')
  }
}