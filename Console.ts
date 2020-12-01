import { State } from "./State";
import { DiskTray } from "./DiskTray";
import { ConsoleOnState } from "./ConsoleOnState";
import { ConsoleOffState } from "./ConsoleOffState";

export class Console {
  diskTray: DiskTray;

  consoleOnState: State;
  consoleOffState: State;
  consoleState: State;

  constructor() {
    this.diskTray = new DiskTray(this);

    this.consoleOnState = new ConsoleOnState(this);
    this.consoleOffState = new ConsoleOffState(this);
    this.consoleState = this.consoleOffState;
  }

  setState(state: State) {
    this.consoleState = state;
  }

  powerOn(): void {
    this.consoleState.powerOn();
  }

  powerOff(): void {
    this.consoleState.powerOff();
  }

  openDiskTray() {
    this.diskTray.open();
  }

  closeDiskTray() {
    this.diskTray.close();
  }

  getConsoleOnState(): State {
    return this.consoleOnState;
  }

  getConsoleOffState() {
    return this.consoleOffState;
  }

  isPoweredOn() {
    return this.consoleState.isPoweredOn();
  }
}
