import "@polymer/polymer/lib/elements/custom-style"
import "@polymer/polymer/lib/elements/dom-module"
import "@polymer/paper-styles/typography"

import styleProperties from "./cork-style-properties.html"
import inputStyles from "./cork-input-style.html"

[styleProperties, inputStyles].forEach((style) => {
  let styleWrapper = document.createElement('div');
  styleWrapper.style.display = 'none';
  styleWrapper.innerHTML = style;
  document.head.appendChild(styleWrapper);
});