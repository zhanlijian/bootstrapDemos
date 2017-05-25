var lineChartData = {
	//X坐标数据
	labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周末"],
	datasets: [{
			fillColor: "rgba(0,255,0,0.5)",
			strokeColor: "rgba(92, 184, 92, 1)",
			pointColor: "rgba(23, 126, 23, 1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [314, 455, 755, 814, 999, 905, 1000]
		}, {
			//统计表的背景颜色
			fillColor: "rgba(255,0,0,0.6)",
			//统计表画笔颜色
			strokeColor: "#ffff00",
			//点的颜色
			pointColor: "#0f0",
			//点边框的颜色
			pointStrokeColor: "red",
			//鼠标触发时点的颜色
			pointHighlightFill: "red",
			//鼠标触发时点边框的颜色
			pointHighlightStroke: "#000",
			//Y坐标数据
			data: [8, 4, 300, 8, 4, 1, 8]
		}, {
			fillColor: "rgba(255,0,0,0.5)",
			strokeColor: "blue",
			pointColor: "rgba(23, 126, 23, 1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [114, 255, 455, 414, 599, 605, 500]
		}
	]

}

window.onload = function() {
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}