import { Console } from "./Console";
import { DiskTrayState } from "./DiskTrayState";
import { DiskTrayOpenState } from "./DiskTrayOpen";
import { DiskTrayClosedState } from "./DiskTrayClosed";

export class DiskTray {
  console: Console;
  diskTrayOpenState: DiskTrayState;
  diskTrayClosedState: DiskTrayState;
  diskTrayState: DiskTrayState;

  constructor(console: Console) {
    this.console = console;
    this.diskTrayOpenState = new DiskTrayOpenState(this.console, this);
    this.diskTrayClosedState = new DiskTrayClosedState(this.console, this);

    this.diskTrayState = this.diskTrayClosedState;
  }

  open(): void {
    this.diskTrayState.open();
  }

  close(): void {
    this.diskTrayState.close();
  }

  setState(diskTrayState: DiskTrayState): void {
    this.diskTrayState = diskTrayState;
  }

  getDiskTrayOpenState(): DiskTrayState {
    return this.diskTrayOpenState;
  }
  getDiskTrayClosedState(): DiskTrayState {
    return this.diskTrayClosedState;
  }
}
