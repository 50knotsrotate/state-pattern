"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskTrayClosedState = void 0;
var DiskTrayClosedState = /** @class */ (function () {
    function DiskTrayClosedState(console) {
        this.console = console;
    }
    DiskTrayClosedState.prototype.powerOn = function () {
        console.log("Power is already on...");
    };
    DiskTrayClosedState.prototype.powerOff = function () {
        console.log("Powering off...");
        this.console.setState(this.console.getConsoleOffState());
    };
    DiskTrayClosedState.prototype.openDiskTray = function () {
        console.log("Disk tray opening...");
        this.console.setState(this.console.getDiskTrayOpenState());
    };
    DiskTrayClosedState.prototype.closeDiskTray = function () {
        console.log("Disk tray is already closed...");
    };
    return DiskTrayClosedState;
}());
exports.DiskTrayClosedState = DiskTrayClosedState;
