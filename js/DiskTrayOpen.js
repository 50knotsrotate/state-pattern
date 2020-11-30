"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskTrayOpenState = void 0;
var DiskTrayOpenState = /** @class */ (function () {
    function DiskTrayOpenState(console) {
        this.console = console;
    }
    DiskTrayOpenState.prototype.powerOn = function () {
        console.log("Power is already on...");
    };
    DiskTrayOpenState.prototype.powerOff = function () {
        console.log("Please close the disk tray before turning off...");
    };
    DiskTrayOpenState.prototype.openDiskTray = function () {
        console.log("Disk tray is already open...");
    };
    DiskTrayOpenState.prototype.closeDiskTray = function () {
        console.log("Closing disk tray...");
        this.console.setState(this.console.getDiskTrayClosedState());
    };
    return DiskTrayOpenState;
}());
exports.DiskTrayOpenState = DiskTrayOpenState;
