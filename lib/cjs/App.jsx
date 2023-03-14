"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home_1 = require("./Components/Home/Home");
var NavBar_1 = require("./Components/NavBar/NavBar");
require("./index.css");
function App() {
    return (<div className="w-screen justify-center bg-gray-800">
      <NavBar_1.default />
      <Home_1.default />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map