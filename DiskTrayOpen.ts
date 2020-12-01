import { DiskTrayState } from "./DiskTrayState";
import { DiskTray } from "./DiskTray";
import { Console } from "./Console";

export class DiskTrayOpenState implements DiskTrayState {
  console: Console;
  diskTray: DiskTray;

  constructor(console: Console, diskTray: DiskTray) {
    this.console = console;
    this.diskTray = diskTray;
  }

  open(): void {
    // Do nothing...
  }

  close(): void {
    if (this.console.isPoweredOn()) {
      console.log("Closing disk tray...");
      this.diskTray.setState(this.diskTray.getDiskTrayClosedState());
    }
  }

  isOpen(): boolean {
    return true;
  }
}
