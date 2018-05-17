angular.module('StudentEvolution')
.directive('stan', function() {
	return {
		template: "<div class='stan'><div class='head'><div class='eye left'></div><div class='eye right'></div><div class='mouth'></div></div><div class='hat'></div><div class='bobble'><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div class='body'><div class='inner'></div><div class='arm left'><div class='hand'></div></div><div class='arm right'><div class='hand'></div></div><div class='scarf'></div></div><div class='buttons'></div><div class='legs'><div class='foot left'></div><div class='foot right'></div></div></div>"
	};
})
.directive('kyle', function() {
	return {
		template: "<div class='kyle'> <div class='head'> <div class='eye left'></div><div class='eye right'></div><div class='mouth'></div></div><div class='hat'> <span></span> </div><div class='body'> <div class='inner'></div><div class='arm left'> <div class='hand'></div></div><div class='arm right'> <div class='hand'></div></div><div class='scarf'></div></div><div class='pocket left'></div><div class='pocket right'></div><div class='legs'> <div class='foot left'></div><div class='foot right'></div></div></div>"
	};
})
.directive('cartman', function() {
	return {
		template: "<div class='cartman'> <div class='head'> <div class='eye left'></div><div class='eye right'></div><div class='mouth'></div><div class='chin'></div></div><div class='hat'></div><div class='bobble'></div><div class='legs'> <div class='foot left'></div><div class='foot right'></div></div><div class='body-cartman'> <div class='inner'></div><div class='arm left'> <div class='hand'></div></div><div class='arm right'> <div class='hand'></div></div></div><div class='buttons'></div></div>"
	};
})
.directive('kenny', function() {
	return {
		template: "<div class='kenny'> <div class='hoodie'></div><div class='head'> <div class='eye left'></div><div class='eye right'></div></div><div class='hoodie-edge'></div><div class='body'> <div class='inner'></div><div class='arm left'> <div class='hand'></div></div><div class='arm right'> <div class='hand'></div></div></div><div class='legs'> <div class='foot left'></div><div class='foot right'></div></div></div>"
	};
});