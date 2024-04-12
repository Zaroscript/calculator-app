//? select elements

let themes = document.querySelectorAll(".toggle .theme");
let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let buttons = document.querySelectorAll("button");
let screen = document.querySelector(".screen");
const specialChar = ["=", "+", "/", "-", "del", "*", "reset"];

//! themes objects

themeOne = {
  screenBg: "hsl(224, 36%, 15%)",
  toggleBg: "hsl(223, 31%, 20%)",
  mainBg: "hsl(222, 26%, 31%)",
  delBg: "hsl(225, 21%, 49%)",
  delHover: "hsl(223.81deg 51.22% 75.88%)",
  delShadow: "hsl(224, 28%, 35%)",
  equalKey: "hsl(6, 63%, 50%)",
  equalHover: "hsl(6.46deg 92.94% 66.67%)",
  equalShadow: "hsl(6, 70%, 34%)",
  mainKeyBg: "hsl(30, 25%, 89%)",
  mainKeyShadow: "hsl(28, 16 %, 65 %)",
  txtMain: "hsl(221, 14%, 31%)",
  txtSecond: "hsl(0, 0%, 100%)",
};

themeTwo = {
  screenBg: "hsl(0, 0%, 93%)",
  toggleBg: "hsl(0, 5%, 81%)",
  mainBg: "hsl(0, 0%, 90%)",
  delBg: "hsl(185, 42%, 37%)",
  delHover: "hsl(185.63deg 43.64% 56.86%)",
  delShadow: "hsl(185, 58%, 25%)",
  equalKey: "hsl(25, 98%, 40%)",
  equalHover: "hsl(25.03deg 100% 60.98%)",
  equalShadow: "hsl(25, 99%, 27%)",
  mainKeyBg: "hsl(45, 7%, 89%)",
  mainKeyShadow: "hsl(35, 11%, 61%)",
  txtMain: "hsl(60, 10%, 19%)",
  txtSecond: "hsl(0, 0%, 100%)",
};

themeThree = {
  screenBg: "hsl(268, 71%, 12%)",
  toggleBg: "hsl(268, 71%, 12%)",
  mainBg: "hsl(268, 75%, 9%)",
  delBg: "hsl(281, 89%, 26%)",
  delHover: "hsl(280.16deg 56.44% 44.12%)",
  delShadow: "hsl(285, 91%, 52%)",
  equalKey: "hsl(176, 100%, 44%)",
  equalHover: "hsl(176.64deg 100% 79.02%)",
  equalShadow: "hsl(177, 92%, 70%)",
  mainKeyBg: "hsl(268, 47%, 21%)",
  mainKeyShadow: "hsl(290, 70%, 36%)",
  txtMain: "hsl(0, 0%, 100%)",
  txtSecond: "hsl(52, 100%, 62%)",
  txtThird: "hsl(198, 20%, 13%)",
};

//! handling themes

const removeActive = (elements) => {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
};

const handleThemes = (e) => {
  if (e.target.className === "theme") {
    removeActive(themes);
    e.target.classList.add("active");

    if (e.target.dataset.theme === "one") {
      document.documentElement.style.setProperty(
        "--screen-background",
        themeOne.screenBg
      );
      document.documentElement.style.setProperty(
        "--toggle-background",
        themeOne.toggleBg
      );
      document.documentElement.style.setProperty(
        "--main-background",
        themeOne.mainBg
      );
      document.documentElement.style.setProperty(
        "--del-background",
        themeOne.delBg
      );
      document.documentElement.style.setProperty(
        "--del-background-hover",
        themeOne.delHover
      );
      document.documentElement.style.setProperty(
        "--del-shadow",
        themeOne.delShadow
      );
      document.documentElement.style.setProperty(
        "--equal-key",
        themeOne.equalKey
      );
      document.documentElement.style.setProperty(
        "--equal-key-hover",
        themeOne.equalHover
      );
      document.documentElement.style.setProperty(
        "--equal-key-shadow",
        themeOne.equalShadow
      );
      document.documentElement.style.setProperty(
        "--main-key-background",
        themeOne.mainKeyBg
      );
      document.documentElement.style.setProperty(
        "--main-key-shadow",
        themeOne.mainKeyShadow
      );
      document.documentElement.style.setProperty(
        "--text-main",
        themeOne.txtMain
      );
      document.documentElement.style.setProperty(
        "--text-second",
        themeOne.txtSecond
      );
    } else if (e.target.dataset.theme === "two") {
      document.documentElement.style.setProperty(
        "--screen-background",
        themeTwo.screenBg
      );
      document.documentElement.style.setProperty(
        "--toggle-background",
        themeTwo.toggleBg
      );
      document.documentElement.style.setProperty(
        "--main-background",
        themeTwo.mainBg
      );
      document.documentElement.style.setProperty(
        "--del-background",
        themeTwo.delBg
      );
      document.documentElement.style.setProperty(
        "--del-background-hover",
        themeTwo.delHover
      );
      document.documentElement.style.setProperty(
        "--del-shadow",
        themeTwo.delShadow
      );
      document.documentElement.style.setProperty(
        "--equal-key",
        themeTwo.equalKey
      );
      document.documentElement.style.setProperty(
        "--equal-key-hover",
        themeTwo.equalHover
      );
      document.documentElement.style.setProperty(
        "--equal-key-shadow",
        themeTwo.equalShadow
      );
      document.documentElement.style.setProperty(
        "--main-key-background",
        themeTwo.mainKeyBg
      );
      document.documentElement.style.setProperty(
        "--main-key-shadow",
        themeTwo.mainKeyShadow
      );
      document.documentElement.style.setProperty(
        "--text-main",
        themeOne.txtMain
      );
      document.documentElement.style.setProperty(
        "--text-second",
        themeTwo.txtSecond
      );
      document.querySelector(".logo").classList.add("two");
      document.querySelector(".themes > p").classList.add("two");
    } else if (e.target.dataset.theme === "three") {
      document.documentElement.style.setProperty(
        "--screen-background",
        themeThree.screenBg
      );
      document.documentElement.style.setProperty(
        "--toggle-background",
        themeThree.toggleBg
      );
      document.documentElement.style.setProperty(
        "--main-background",
        themeThree.mainBg
      );
      document.documentElement.style.setProperty(
        "--del-background",
        themeThree.delBg
      );
      document.documentElement.style.setProperty(
        "--del-background-hover",
        themeThree.delHover
      );
      document.documentElement.style.setProperty(
        "--del-shadow",
        themeThree.delShadow
      );
      document.documentElement.style.setProperty(
        "--equal-key",
        themeThree.equalKey
      );
      document.documentElement.style.setProperty(
        "--equal-key-hover",
        themeThree.equalHover
      );
      document.documentElement.style.setProperty(
        "--equal-key-shadow",
        themeThree.equalShadow
      );
      document.documentElement.style.setProperty(
        "--main-key-background",
        themeThree.mainKeyBg
      );
      document.documentElement.style.setProperty(
        "--main-key-shadow",
        themeThree.mainKeyShadow
      );
    }
  }
};

themes.forEach((theme) => {
  theme.addEventListener("click", handleThemes);
});

//? Claculator

let output = "";
const calculator = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "del") {
    output = output.toString().slice(0, -1);
    console.log(output);
  } else if (btnValue === "reset") {
    output = "";
  } else {
    if (output === "" && specialChar.includes(btnValue)) return;
    output += btnValue;
  }
  screen.innerHTML = output;
};

buttons.forEach((button) =>
  button.addEventListener("click", (e) => calculator(e.target.dataset.value))
);
