document.addEventListener("DOMContentLoaded", function () {
	const cat_btn = document.querySelector(".cat-btn");
	const cat_imgs = document.querySelector(".cat-imgs");
	
	cat_btn.addEventListener("click", function () {
		if (cat_imgs.classList.contains("active")) {
			scroll_to_top();
			setTimeout(function () {
				cat_imgs.classList.toggle("active");
			}, 300);
		} else {
			cat_imgs.classList.toggle("active");
			scroll_to_cat();
		}
	});
});

function scroll_to_cat() {
	const cat = document.querySelector("#cat");
	cat.scrollIntoView({ behavior: "smooth" });
}

function scroll_to_top() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}