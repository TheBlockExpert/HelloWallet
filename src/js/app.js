import $$ from "dom7";
import Framework7 from "framework7/framework7.esm.bundle.js";

// Import F7 Styles
import "framework7/css/framework7.bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.css";

// Import Routes
import routes from "./routes.js";

var app = new Framework7({
  root: "#app", // App root element

  name: "wallet-app", // App name
  theme: "auto", // Automatic theme detection
  
  // App root data
  data: function() {
    return {
      user: {
        firstName: "John",
        lastName: "Doe"
      }
    };
  },
  // App root methods
  methods: {
    helloWorld: function() {
      app.dialog.alert("Hello World!");
    }
  },
  // App routes
  routes: routes
});

// Login Screen Demo
$$("#my-login-screen .login-button").on("click", function() {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close("#my-login-screen");

  // Alert username and password
  app.dialog.alert("Username: " + username + "<br>Password: " + password);
});

// // Create Mnemonic
// $$('#createMnemonic').on('click', function () {
//   var bip39 = require("bip39");
//   const mnemonic = bip39.generateMnemonic();
//   console.log(mnemonic);
//   app.dialog.alert(mnemonic);
// });

// Generate Mnemonic on Page load
// $$(document).on('page:init', function (e) {
//   var bip39 = require("bip39");
//   const mnemonic = bip39.generateMnemonic();
//   console.log(mnemonic);
//   app.dialog.alert(mnemonic);
// })

// Generate Mnemonic on WalletSeed Page
// $$(document).on('page:init', '.page[data-name="walletseed"]', function (e) {
//   var bip39 = require("bip39");
//   const mnemonic = bip39.generateMnemonic();
//   console.log(mnemonic);
//   app.dialog.alert(mnemonic);
//   document.write(mnemonic);
// })

