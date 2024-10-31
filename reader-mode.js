function readerMode() {
    // Initialization
    if (typeof this.active === "undefined") {
	this.active = false;
	this.oldMargin = "";
	this.oldPadding = "";
	this.oldWidth = "";

	// Just readjust things on resize
	window.addEventListener("resize", () => {
	    document.body.style.margin = "0% 0% 0% 0%";
	    document.body.style.width = "max(6.5in, 33.33vw)";
	    let computedWidth = window.getComputedStyle(document.body).width;
	    let padding = `calc(50vw - 0.5 * ${computedWidth})`;
	    // padding: top right bottom left
	    document.body.style.padding = `0% ${padding} 0% ${padding}`;
	});
    }

    if (this.active) {	// Restore everything
	document.body.style.width = this.oldWidth;
	document.body.style.padding = this.oldPadding;
	document.body.style.margin = this.oldMargin;
	this.active = false;
	return;
    }

    // Center everything
    this.oldMargin = document.body.style.margin;
    this.oldWidth = document.body.style.width;
    this.oldPadding = document.body.style.padding;
    document.body.style.margin = "0% 0% 0% 0%";
    document.body.style.width = "max(6.5in, 33.33vw)";
    let computedWidth = window.getComputedStyle(document.body).width;
    let padding = `calc(50vw - 0.5 * ${computedWidth})`;
    // padding: top right bottom left
    document.body.style.padding = `0% ${padding} 0% ${padding}`;
    this.active = true;
}

readerMode();
