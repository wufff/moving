//屏幕适配，css前加载
setRem();
window.addEventListener("orientationchange", setRem);
window.addEventListener("resize", setRem);
function setRem() {
	var html = document.querySelector("html");
	var width = html.getBoundingClientRect().width;
	html.style.fontSize = width / 15 + "px";
}
// console.log("启动适配");
