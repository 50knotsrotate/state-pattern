"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskTrayClosedState = void 0;
var DiskTrayClosedState = /** @class */ (function () {
    function DiskTrayClosedState(console, diskTray) {
        this.console = console;
        this.diskTray = diskTray;
    }
    DiskTrayClosedState.prototype.open = function () {
        if (this.console.isPoweredOn()) {
            console.log("Opening disk tray...");
            this.diskTray.setState(this.diskTray.getDiskTrayOpenState());
        }
    };
    DiskTrayClosedState.prototype.close = function () {
        // Do nothing
    };
    DiskTrayClosedState.prototype.isOpen = function () {
        return false;
    };
    return DiskTrayClosedState;
}());
exports.DiskTrayClosedState = DiskTrayClosedState;
