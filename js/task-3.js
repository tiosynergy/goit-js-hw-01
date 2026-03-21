function getElementWidth(content, padding, border) {
let totalWidth = Number(content.replace("px", "")) + Number(padding.replace("px", "")) * 2 + Number(border.replace("px", "")) * 2;
  alert(totalWidth);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
