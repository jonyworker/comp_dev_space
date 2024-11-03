<script setup>
import Container from "@/ui/layout/Grid/Container.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Col from "@/ui/layout/Grid/Column.vue"
import FakeContent from "@/ui/utility/FakeContent/FakeContent.vue";
</script>

<template>
	<!-- Basic -->
	<Container style="border:2px dashed #f00;" class="mb-5">
		<Row>
			<Col>
				<FakeContent height="100">colum</FakeContent>
			</Col>
			<Col>
				<FakeContent height="100">colum</FakeContent>
			</Col>
			<Col>
				<FakeContent height="100">colum</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Row align-item-start -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row align="start" style="height: 150px">
			<Col>
				<FakeContent height="50">[ Row ] align:start</FakeContent>
			</Col>
			<Col>
				<FakeContent height="50">[ Row ] align:start</FakeContent>
			</Col>
			<Col>
				<FakeContent height="50">[ Row ] align:start</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Row align-item-center -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row align="center" style="height: 150px">
			<Col>
				<FakeContent height="50">[ Row ] align:center</FakeContent>
			</Col>
			<Col>
				<FakeContent height="50">[ Row ] align:center</FakeContent>
			</Col>
			<Col>
				<FakeContent height="50">[ Row ] align:center</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Row align-item-end -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row align="end" style="height: 150px">
			<Col>
				<FakeContent height="50">[ Row ] align:end</FakeContent>
			</Col>
			<Col>
				<FakeContent height="50">[ Row ] align:end</FakeContent>
			</Col>
			<Col>
				<FakeContent height="50">[ Row ] align:end</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Col align-self -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row style="height: 150px">
			<Col alignSelf="start">
				<FakeContent height="50">[ Col ] alignSelf:start</FakeContent>
			</Col>
			<Col alignSelf="center">
				<FakeContent height="50">[ Col ] alignSelf:center</FakeContent>
			</Col>
			<Col alignSelf="end">
				<FakeContent height="50">[ Col ] alignSelf:end</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Row justify-content -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row g="0" justify="start">
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:start</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:start</FakeContent>
			</Col>
		</Row>

		<Row g="0" justify="center" class="mt-4">
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:center</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:center</FakeContent>
			</Col>
		</Row>

		<Row g="0" justify="end" class="mt-4">
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:end</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:end</FakeContent>
			</Col>
		</Row>

		<Row g="0" justify="around" class="mt-4">
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:around</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:around</FakeContent>
			</Col>
		</Row>

		<Row g="0" justify="between" class="mt-4">
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:between</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:between</FakeContent>
			</Col>
		</Row>

		<Row g="0" justify="evenly" class="mt-4">
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:evenly</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Row ] justify:evenly</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- gutter default -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row >
			<Col col="12">
				<FakeContent height="50">[ Row ] g:default</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:default</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:default</FakeContent>
			</Col>
		</Row>

		<Row g="0" class="mt-4">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:0</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:0</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:0</FakeContent>
			</Col>
		</Row>

		<Row g="1" class="mt-4">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:1</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:1</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:1</FakeContent>
			</Col>
		</Row>

		<Row g="2" class="mt-4">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:2</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:2</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:2</FakeContent>
			</Col>
		</Row>

		<Row g="2" class="mt-4">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:2</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:2</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:2</FakeContent>
			</Col>
		</Row>

		<Row g="3" class="mt-4">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:3</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:3</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:3</FakeContent>
			</Col>
		</Row>

		<Row g="4" class="mt-4">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:4</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:4</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:4</FakeContent>
			</Col>
		</Row>

		<Row g="5" class="mt-1">
			<Col col="12">
				<FakeContent height="50">[ Row ] g:5</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:5</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Row ] g:5</FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Col width-setting -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row gy="2">
			<Col col="1">
				<FakeContent height="50">col:1</FakeContent>
			</Col>
			<Col col="11">
				<FakeContent height="50">[ Col ] col:11</FakeContent>
			</Col>

			<Col col="2">
				<FakeContent height="50">[ Col ] col:2</FakeContent>
			</Col>
			<Col col="10">
				<FakeContent height="50">[ Col ] col:10</FakeContent>
			</Col>

			<Col col="3">
				<FakeContent height="50">[ Col ] col:3</FakeContent>
			</Col>
			<Col col="9">
				<FakeContent height="50">[ Col ] col:9</FakeContent>
			</Col>

			<Col col="4">
				<FakeContent height="50">[ Col ] col:4</FakeContent>
			</Col>
			<Col col="8">
				<FakeContent height="50">[ Col ] col:8</FakeContent>
			</Col>

			<Col col="5">
				<FakeContent height="50">[ Col ] col:5</FakeContent>
			</Col>
			<Col col="7">
				<FakeContent height="50">[ Col ] col:7</FakeContent>
			</Col>

			<Col col="6">
				<FakeContent height="50">[ Col ] col:6</FakeContent>
			</Col>
			<Col col="6">
				<FakeContent height="50">[ Col ] col:6</FakeContent>
			</Col>

			<Col col="7">
				<FakeContent height="50">[ Col ] col:7</FakeContent>
			</Col>
			<Col col="5">
				<FakeContent height="50">[ Col ] col:5</FakeContent>
			</Col>

			<Col col="8">
				<FakeContent height="50">[ Col ] col:8</FakeContent>
			</Col>
			<Col col="4">
				<FakeContent height="50">[ Col ] col:4</FakeContent>
			</Col>

			<Col col="9">
				<FakeContent height="50">[ Col ] col:9</FakeContent>
			</Col>
			<Col col="3">
				<FakeContent height="50">[ Col ] col:3</FakeContent>
			</Col>

			<Col col="10">
				<FakeContent height="50">[ Col ] col:10</FakeContent>
			</Col>
			<Col col="2">
				<FakeContent height="50">[ Col ] col:2</FakeContent>
			</Col>

			<Col col="11">
				<FakeContent height="50">[ Col ] col:11</FakeContent>
			</Col>
			<Col col="1">
				<FakeContent height="50">col:1</FakeContent>
			</Col>

			<Col col="12">
				<FakeContent height="50">[ Col ] col:12</FakeContent>
			</Col>

		</Row>
	</Container>

	<!-- Col order -->
	<Container style="border:2px dashed #f00" class="mb-5">
		<Row>
			<Col order="last">
				<FakeContent height="50">[ Col-01 ] order:last</FakeContent>
			</Col>
			<Col >
				<FakeContent height="50">[ Col-02 ] </FakeContent>
			</Col>
			<Col >
				<FakeContent height="50">[ Col-03 ] </FakeContent>
			</Col>
		</Row>
	</Container>

	<!-- Col response -->
	<Container style="border:2px dashed #f00;" class="mb-5">
		<Row g="3">
			<Col sm="6" md="4" lg="3" >
				<FakeContent height="100">[ Col ] sm:6 md:4 lg:3</FakeContent>
			</Col>
			<Col sm="6" md="4" lg="3" >
				<FakeContent height="100">[ Col ] sm:6 md:4 lg:3</FakeContent>
			</Col>
			<Col sm="6" md="4" lg="3" >
				<FakeContent height="100">[ Col ] sm:6 md:4 lg:3</FakeContent>
			</Col>
			<Col sm="6" md="4" lg="3" >
				<FakeContent height="100">[ Col ] sm:6 md:4 lg:3</FakeContent>
			</Col>
		</Row>
	</Container>
</template>

<style scoped lang="scss">

</style>