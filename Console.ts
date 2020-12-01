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

  setState(state: State): void {
    this.consoleState = state;
  }

  powerOn(): void {
    this.consoleState.powerOn();
  }

  powerOff(): void {
    this.consoleState.powerOff();
  }

  openDiskTray(): void {
    this.diskTray.open();
  }

  closeDiskTray(): void {
    this.diskTray.close();
  }

  getConsoleOnState(): State {
    return this.consoleOnState;
  }

  getConsoleOffState(): State {
    return this.consoleOffState;
  }

  isPoweredOn(): boolean {
    return this.consoleState.isPoweredOn();
  }
}
