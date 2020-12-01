"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiskTray = void 0;
var DiskTrayOpen_1 = require("./DiskTrayOpen");
var DiskTrayClosed_1 = require("./DiskTrayClosed");
var DiskTray = /** @class */ (function () {
    function DiskTray(console) {
        this.console = console;
        this.diskTrayOpenState = new DiskTrayOpen_1.DiskTrayOpenState(this.console, this);
        this.diskTrayClosedState = new DiskTrayClosed_1.DiskTrayClosedState(this.console, this);
        this.diskTrayState = this.diskTrayClosedState;
    }
    DiskTray.prototype.open = function () {
        this.diskTrayState.open();
    };
    DiskTray.prototype.close = function () {
        this.diskTrayState.close();
    };
    DiskTray.prototype.setState = function (diskTrayState) {
        this.diskTrayState = diskTrayState;
    };
    DiskTray.prototype.getDiskTrayOpenState = function () {
        return this.diskTrayOpenState;
    };
    DiskTray.prototype.getDiskTrayClosedState = function () {
        return this.diskTrayClosedState;
    };
    DiskTray.prototype.isOpen = function () {
        return this.diskTrayState.isOpen();
    };
    return DiskTray;
}());
exports.DiskTray = DiskTray;
