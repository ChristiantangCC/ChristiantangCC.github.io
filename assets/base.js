class Slider extends HTMLElement {
  constructor() {
    super();

    const inputSlider = document.createElement("input");
    inputSlider.classList.add("fullwidth");
    inputSlider.id = this.getAttribute("name");
    inputSlider.setAttribute("min", this.getAttribute("min"));
    inputSlider.setAttribute("max", this.getAttribute("max"));
    inputSlider.setAttribute("value", this.getAttribute("value"));
    inputSlider.setAttribute("step", this.getAttribute("step"));
    inputSlider.setAttribute("type", "range");

    const inputSliderWrapper = document.createElement("div");
    inputSliderWrapper.classList.add("settings");

    const inputSliderName = document.createElement("span");
    inputSliderName.innerHTML = this.getAttribute("name");

    const inputSliderValue = document.createElement("span");
    inputSliderValue.classList.add("valueoutput");
    inputSliderValue.innerHTML =
      this.getAttribute("value") + " " + this.getAttribute("prefix");

    this.appendChild(inputSliderWrapper);
    inputSliderWrapper.appendChild(inputSliderName);
    inputSliderWrapper.appendChild(inputSliderValue);

    this.appendChild(inputSlider);
  }

  connectedCallback() {
    const inputSlider = this.querySelector("input");
    const cards = document.querySelectorAll(".card");

    for (const card of cards) {
      if (inputSlider.id == "Blur") {
        card.style.backdropFilter = "blur(" + inputSlider.value + "px)";
      } else if (inputSlider.id == "Transparency") {
        card.style.background =
          "rgba(255, 255, 255, " + inputSlider.value + ")";
      } else if (inputSlider.id == "Borderradius") {
        card.style.borderRadius = inputSlider.value + "px";
      } else if (inputSlider.id == "Outline") {
        card.style.border =
          "1px solid rgba(255, 255, 255, " + inputSlider.value + ")";
      }
    }

    inputSlider.addEventListener("input", () => {
      var hexColor = colorPicker.value;
      var rbaColor = hexToRgb(hexColor);

      let sliderParent = this.querySelector(".settings");
      let sliderOutput = sliderParent.querySelector(".valueoutput");
      sliderOutput.innerHTML =
        inputSlider.value + " " + this.getAttribute("prefix");
      inputSlider.setAttribute("value", inputSlider.value);

      for (const card of cards) {
        if (inputSlider.id == "Blur") {
          card.style.backdropFilter = "blur(" + inputSlider.value + "px)";
          card.style["-webkit-backdrop-filter"] =
            "blur(" + inputSlider.value + "px)";
          elementBlur.innerHTML =
            "backdrop-filter: blur" + "(" + inputSlider.value + "px" + ");";
          eelementWebkitBlur.innerHTML =
            "-webkit-backdrop-filter: blur" +
            "(" +
            inputSlider.value +
            "px" +
            ");";
        } else if (inputSlider.id == "Transparency") {
          card.style.backgroundColor =
            "rgba(" +
            rbaColor.r +
            ", " +
            rbaColor.g +
            ", " +
            rbaColor.b +
            ", " +
            inputSlider.value +
            ")";
          elementBackground.innerHTML =
            "background: rgba" +
            "(" +
            rbaColor.r +
            ", " +
            rbaColor.g +
            ", " +
            rbaColor.b +
            ", " +
            inputSlider.value +
            ");";
        } else if (inputSlider.id == "Borderradius") {
          card.style.borderRadius = inputSlider.value + "px";
          elementBorderradius.innerHTML =
            "border-radius: " + inputSlider.value + "px" + ";";
        } else if (inputSlider.id == "Outline") {
          card.style.border =
            "1px solid rgba(" +
            rbaColor.r +
            ", " +
            rbaColor.g +
            ", " +
            rbaColor.b +
            ", " +
            inputSlider.value +
            ")";
          elementBorder.innerHTML =
            "border: 1px solid rgba" +
            "(" +
            rbaColor.r +
            ", " +
            rbaColor.g +
            ", " +
            rbaColor.b +
            ", " +
            inputSlider.value +
            ");";
        }
      }
    });
  }
}

customElements.define("cc-slider", Slider);

// All cards - main card and minor ones
const cards = document.querySelectorAll(".card");

// All elements for the "copy cody" section
var elementBlur = document.getElementById("element-blur");
var eelementWebkitBlur = document.getElementById("element-webkitblur");
var elementBackground = document.getElementById("element-background");
var elementBorder = document.getElementById("element-border");
var elementBorderradius = document.getElementById("element-borderradius");
var elementBoxshadow = document.getElementById("element-boxshadow");

// Boxshadow setting eventlistener
const boxshadowCheckbox = document.getElementById("boxshadow");
boxshadowCheckbox.addEventListener("change", () => {
  for (const card of cards) {
    if (boxshadow.checked == true) {
      card.style.boxShadow = "0 8px 32px 0 rgba(55, 55, 55, 0.36)";
      elementBoxshadow.innerText =
        "box-shadow: 0 8px 32px 0 rgba(55, 55, 55, 0.36);";
    } else {
      card.style.boxShadow = "none";
      elementBoxshadow.innerText = "";
    }
  }
});

// Tur hex to rgb function (used for changing our color picker value to rgb)
function hexToRgb(hex) {
  hex = hex.replace("#", "");

  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);

  return {
    r: red,
    g: green,
    b: blue,
  };
}

// Color Picker eventlistener
const colorPicker = document.getElementById("color");

colorPicker.addEventListener("change", () => {
  colorPicker.setAttribute("value", colorPicker.value);
  var transparencyValue = document.getElementById("Transparency").value;
  var hexColor = colorPicker.value;
  var rbaColor = hexToRgb(hexColor);

  for (const card of cards) {
    card.style.backgroundColor =
      "rgba(" +
      rbaColor.r +
      ", " +
      rbaColor.g +
      ", " +
      rbaColor.b +
      ", " +
      transparencyValue +
      ")";
    card.style.border =
      "1px solid rgba(" +
      rbaColor.r +
      ", " +
      rbaColor.g +
      ", " +
      rbaColor.b +
      ", " +
      transparencyValue +
      ")";

    elementBackground.innerHTML =
      "background: rgba" +
      "(" +
      rbaColor.r +
      ", " +
      rbaColor.g +
      ", " +
      rbaColor.b +
      ", " +
      transparencyValue +
      ");";
    elementBorder.innerHTML =
      "border: 1px solid rgba" +
      "(" +
      rbaColor.r +
      ", " +
      rbaColor.g +
      ", " +
      rbaColor.b +
      ", " +
      transparencyValue +
      ");";
  }
});
