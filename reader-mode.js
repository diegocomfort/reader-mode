function readerMode() {
    // staitc bool active = false;
    if (typeof this.active === "undefined") {
	this.active = false;
    }

    if (active) {
	document.body.style.width = this.oldWidth;
	document.body.style.padding = this.oldPadding;
	this.active = false;
	return;
    }

    this.oldWidth = document.body.style.width;
    document.body.style.width = "max(6.5in, 33.33vw)";
    this.oldPadding = document.body.style.padding;
    let computedWidth = window.getComputedStyle(document.body).width;
    // padding: top right bottom left
    document.body.style.padding =
	`0% 0% 0% calc(50vw - 0.5 * ${computedWidth})`;
    this.active = true
}

readerMode();

// Just readjust things
window.addEventListener("resize", () => {
    this.oldWidth = document.body.style.width;
    document.body.style.width = "max(6.5in, 33we.33vw)";
    let computedWidth = window.getComputedStyle(document.body).width;
    // padding: top right bottom left
    document.body.style.padding =
	`0% 0% 0% calc(50vw - 0.5 * ${computedWidth})`;
});
