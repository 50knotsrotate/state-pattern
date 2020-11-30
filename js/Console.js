"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var ConsoleOnState_1 = require("./ConsoleOnState");
var ConsoleOffState_1 = require("./ConsoleOffState");
var DiskTrayOpen_1 = require("./DiskTrayOpen");
var DiskTrayClosed_1 = require("./DiskTrayClosed");
var Console = /** @class */ (function () {
    function Console() {
        this.consoleOnState = new ConsoleOnState_1.ConsoleOnState(this);
        this.consoleOffState = new ConsoleOffState_1.ConsoleOffState(this);
        this.diskTrayOpenState = new DiskTrayOpen_1.DiskTrayOpenState(this);
        this.diskTrayClosedState = new DiskTrayClosed_1.DiskTrayClosedState(this);
        this.consoleState = this.consoleOffState;
    }
    Console.prototype.setState = function (state) {
        this.consoleState = state;
    };
    Console.prototype.powerOn = function () {
        this.consoleState.powerOn();
    };
    Console.prototype.powerOff = function () {
        this.consoleState.powerOff();
    };
    Console.prototype.openDiskTray = function () {
        this.consoleState.openDiskTray();
    };
    Console.prototype.closeDiskTray = function () {
        this.consoleState.closeDiskTray();
    };
    Console.prototype.getConsoleOnState = function () {
        return this.consoleOnState;
    };
    Console.prototype.getConsoleOffState = function () {
        return this.consoleOffState;
    };
    Console.prototype.getDiskTrayOpenState = function () {
        return this.diskTrayOpenState;
    };
    Console.prototype.getDiskTrayClosedState = function () {
        return this.diskTrayClosedState;
    };
    return Console;
}());
exports.Console = Console;
