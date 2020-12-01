import { DiskTrayState } from "./DiskTrayState";
import { DiskTray } from "./DiskTray";
import { Console } from "./Console";

export class DiskTrayClosedState implements DiskTrayState {
  console: Console;
  diskTray: DiskTray;

  constructor(console: Console, diskTray: DiskTray) {
    this.console = console;
    this.diskTray = diskTray;
  }

  open(): void {
    if (this.console.isPoweredOn()) {
      console.log("Opening disk tray...");
      this.diskTray.setState(this.diskTray.getDiskTrayOpenState());
    }
  }

  close(): void {
    // Do nothing
  }

  isOpen(): boolean {
    return false;
  }
}
