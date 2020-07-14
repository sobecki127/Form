// Tab left or right
let loginForm = document.getElementById("login-form");
let registerForm = document.getElementById("register-form");

// This is not good
// Use hash change and take out inline function calls
function tabRight() {
  registerForm.style.left = "-100%";
  loginForm.style.left = "50%";
  loginForm.style.transform = "translate(-50%, 0)";
}

function tabLeft() {
  loginForm.style.left = "150%";
  registerForm.style.left = "50%";
  registerForm.style.transform = "translate(-50%, 0)";
}

// Animate Each input when in focus or when != ""
let animatedInputContainers = document.getElementsByClassName(
  "animated-input-container"
);

let valueUpdate = () => {
  for (let animatedInputContainer of animatedInputContainers) {
    let input = animatedInputContainer.children[0];
    let label = input.nextElementSibling.firstChild;

    if (input.value !== input.defaultValue || input == document.activeElement) {
      label.style.WebkitTransform = "translateY(-150%)";
      label.style.transform = "translateY(-150%)";
    } else {
      label.style.WebkitTransform = "translateY(0)";
      label.style.transform = "translateY(0)";
    }
  }
};

// This is not a good fix
// When outside of the window is clicked or tab is used it fails

let body = document.querySelector("body");
document.addEventListener("click", valueUpdate);

// ++++++++++++++++++++++ Tab debuger

// (function () {
//   "use strict";
//   document.addEventListener("keydown", function (event) {
//     setTimeout(function () {
//       var key, win, frameEl, activeEl, uri, msg;
//       msg = "";
//       key = window.event ? event.keyCode : event.which;

//       //Tab
//       if (key === 9) {
//         activeEl = document.activeElement;
//         while (activeEl && activeEl.tagName === "IFRAME") {
//           activeEl = activeEl.contentWindow.document.activeElement;
//         }
//         if (activeEl) {
//           msg += activeEl.id + " - " + activeEl.tagName;
//           win = activeEl.ownerDocument.defaultView;
//           uri = win.location.href;
//           msg += " - " + uri;
//           msg += " (tabindex=" + activeEl.getAttribute("tabindex") + ")";
//         }

//         frameEl = win.frameElement;
//         if (frameEl) {
//           msg +=
//             "in frame " +
//             frameEl.id +
//             " (tabindex=" +
//             frameEl.getAttribute("tabindex") +
//             ")";
//         }
//         console.log(msg);
//         console.log(activeEl, frameEl);
//         activeEl = null;
//       }
//     }, 500);
//   });
// })();
