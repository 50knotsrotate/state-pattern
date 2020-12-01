"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleOffState = void 0;
var ConsoleOffState = /** @class */ (function () {
    function ConsoleOffState(console) {
        this.console = console;
    }
    ConsoleOffState.prototype.powerOn = function () {
        console.log("Powering on...");
        this.console.setState(this.console.getConsoleOnState());
    };
    ConsoleOffState.prototype.powerOff = function () {
        // Do nothing
    };
    ConsoleOffState.prototype.openDiskTray = function () {
        // Do nothing
    };
    ConsoleOffState.prototype.closeDiskTray = function () {
        // Do nothing
    };
    ConsoleOffState.prototype.isPoweredOn = function () {
        return false;
    };
    return ConsoleOffState;
}());
exports.ConsoleOffState = ConsoleOffState;
