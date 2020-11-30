"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOnState = void 0;
var ConsoleOnState = /** @class */ (function () {
    function ConsoleOnState(console) {
        this.console = console;
    }
    ConsoleOnState.prototype.powerOn = function () {
        console.log("The console is already on...");
    };
    ConsoleOnState.prototype.powerOff = function () {
        console.log("Powering off...");
        this.console.setState(this.console.getConsoleOffState());
    };
    ConsoleOnState.prototype.openDiskTray = function () {
        console.log("Opening disk tray...");
        this.console.setState(this.console.getDiskTrayOpenState());
    };
    ConsoleOnState.prototype.closeDiskTray = function () {
        console.log('Closing disk tray...');
    };
    return ConsoleOnState;
}());
exports.ConsoleOnState = ConsoleOnState;
