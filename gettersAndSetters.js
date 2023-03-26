"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getDbId", {
        get: function () {
            return this.dbId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setDbId", {
        set: function (id) {
            this.dbId = id;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.cahngeRole = function () {
        this.role = "ADMIN";
    };
    Object.defineProperty(Admin.prototype, "getRole", {
        get: function () {
            return this.role;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}(User));
var userObj = new User("Shridhar", "shr@gmail.com");
console.log("User obj is ", userObj);
// userObj.dbId -> private var not accessible
userObj.setDbId = 2;
console.log("Id is ", userObj.getDbId);
var userObj1 = new Admin("Shridhar", "shr@gmail.com");
userObj1.cahngeRole();
console.log("User obj1 is ", userObj1);
console.log("Role is ", userObj1.getRole);
