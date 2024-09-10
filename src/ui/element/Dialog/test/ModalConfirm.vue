<script setup>

</script>

<template>
<div style="
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0,0,0, .5);
	display: flex;
	align-items: center;
	justify-content: center;
     z-index: 2;"
	 >
	<div style="left: 0;
		 display:flex;
		 align-items: center;
		 justify-content:center;"
	>
		<div style="background-color: #fff;
			 color:black;
			 border-radius: 8px;
			 text-align: center;
			 padding: 24px;
			 width: 240px;
			 "
		>
			<h3>Do you confirm?</h3>
			<div style="display:flex;
				 justify-content:center;
				 padding: 16px 0;
				 color: white"
			>
				<button @click="event => $emit('close')">No</button>
				<button @click="event => $emit('close')">Yes</button>
			</div>
		</div>

	</div>
</div>
</template>

<style scoped lang="scss">

</style>