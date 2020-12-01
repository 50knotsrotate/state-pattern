"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var DiskTray_1 = require("./DiskTray");
var ConsoleOnState_1 = require("./ConsoleOnState");
var ConsoleOffState_1 = require("./ConsoleOffState");
var Console = /** @class */ (function () {
    function Console() {
        this.diskTray = new DiskTray_1.DiskTray(this);
        this.consoleOnState = new ConsoleOnState_1.ConsoleOnState(this);
        this.consoleOffState = new ConsoleOffState_1.ConsoleOffState(this);
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
        this.diskTray.open();
    };
    Console.prototype.closeDiskTray = function () {
        this.diskTray.close();
    };
    Console.prototype.getConsoleOnState = function () {
        return this.consoleOnState;
    };
    Console.prototype.getConsoleOffState = function () {
        return this.consoleOffState;
    };
    Console.prototype.isPoweredOn = function () {
        return this.consoleState.isPoweredOn();
    };
    return Console;
}());
exports.Console = Console;
