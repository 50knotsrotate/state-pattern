"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskTrayOpenState = void 0;
var DiskTrayOpenState = /** @class */ (function () {
    function DiskTrayOpenState(console, diskTray) {
        this.console = console;
        this.diskTray = diskTray;
    }
    DiskTrayOpenState.prototype.open = function () {
        // Do nothing...
    };
    DiskTrayOpenState.prototype.close = function () {
        if (this.console.isPoweredOn()) {
            console.log('Closing disk tray...');
            this.diskTray.setState(this.diskTray.getDiskTrayClosedState());
        }
    };
    return DiskTrayOpenState;
}());
exports.DiskTrayOpenState = DiskTrayOpenState;
