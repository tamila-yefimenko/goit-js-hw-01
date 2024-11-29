function getElementWidth(content, padding, border) {
    const contentWithoutComa = content.replace(',', '.');
    const paddingtWithoutComa = padding.replace(',', '.');
    const borderWithoutComa = border.replace(',', '.');

    const contentIsNumber = Number.parseFloat(contentWithoutComa);
    const paddingIsNumber = Number.parseFloat(paddingtWithoutComa);
    const borderIsNumber = Number.parseFloat(borderWithoutComa);
    
    return contentIsNumber + 2 * paddingIsNumber + 2 * borderIsNumber;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200