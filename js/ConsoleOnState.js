"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOnState = void 0;
var ConsoleOnState = /** @class */ (function () {
    function ConsoleOnState(console) {
        this.console = console;
    }
    ConsoleOnState.prototype.powerOn = function () {
        // Do nothing
    };
    ConsoleOnState.prototype.powerOff = function () {
        // The disk tray should close before powering off
        this.console.closeDiskTray();
        console.log("Powering off...");
        this.console.setState(this.console.getConsoleOffState());
    };
    ConsoleOnState.prototype.isPoweredOn = function () {
        return true;
    };
    return ConsoleOnState;
}());
exports.ConsoleOnState = ConsoleOnState;
