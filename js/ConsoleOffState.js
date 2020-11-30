"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOffState = void 0;
var ConsoleOffState = /** @class */ (function () {
    function ConsoleOffState(console) {
        this.console = console;
    }
    ConsoleOffState.prototype.powerOn = function () {
        console.log("Powering on...");
        this.console.setState(this.console.consoleOnState);
    };
    ConsoleOffState.prototype.powerOff = function () {
        console.log("The console is already off...");
    };
    ConsoleOffState.prototype.openDiskTray = function () {
        console.log("Cannot open disk tray if console is off...");
    };
    ConsoleOffState.prototype.closeDiskTray = function () {
        console.log("Cannot close disk tray if console is off...");
    };
    return ConsoleOffState;
}());
exports.ConsoleOffState = ConsoleOffState;
