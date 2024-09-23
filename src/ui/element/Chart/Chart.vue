<script setup>
import { ref, onMounted, watch, onBeforeUnmount, reactive } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
	//資料接口
	chartdata: {
		type: Object,
		default: () => {}
	}
})
// Chart 顯示資料


// Chart 顯示設定
const options = {
	responsive: true,
	aspectRatio: 1|1,
	// 如果不設 maintainAspectRatio,寬度會固定
	// maintainAspectRatio: false,
	plugins: {
		legend: {
			// datasets裡每一個物件會變成圖例，出現在給定的位置
			position: "top",
		},
		title: {
			display: true,
			text: "本週 Git Commit 次數",
		},
	},
};

let chart;
const initChart = () => {
	const ctx = document.getElementById("chart");

	// 如果 chart 存在的話 自殺
	if (chart) {
		chart.destroy();
	}

	chart = new Chart(ctx, {
		type: "bar",
		data: props.chartdata,
		options,
	});
};

// 監視有沒有新資料
watch(props.chartdata, (newData) => {
	if (chart) {
		chart.data = newData; // Update the chart's data
		chart.update(); // Re-render the chart
	}
});

//
const handleResize = () => {
	if (chart) {
		chart.resize();
	}
};

onMounted(() => {
	initChart();
	window.addEventListener('resize', handleResize);
});

// Chart自殺
onBeforeUnmount(() => {
	if (chart) {
		chart.destroy();
	}
	window.removeEventListener('resize', handleResize);
});


</script>

<template>
	<div class="card-content-image">
		<canvas id="chart"></canvas>
	</div>
</template>

<style scoped>
.card-content-image {
	position: relative;
	width: 100%;
	height: 400px;
}

canvas {
	max-width: 100%;
	max-height: 100%;
}
</style>
