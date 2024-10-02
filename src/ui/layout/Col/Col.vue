<script>
import { defineComponent, h } from "vue";

export default defineComponent({
	props: {
		col: {
			type: [Number, String],
		},
		sm: {
			type: [Number, String],
		},
		md: {
			type: [Number, String],
		},
		lg: {
			type: [Number, String],
		},
		xl: {
			type: [Number, String],
		},
		xxl: {
			type: [Number, String],
		},
	},
	setup(props, { slots }) {
		const colNum = Number.parseInt(props.col);
		const smColNum = Number.parseInt(props.sm);
		const mdColNum = Number.parseInt(props.md);
		const lgColNum = Number.parseInt(props.lg);
		const xlColNum = Number.parseInt(props.xl);
		const xxlColNum = Number.parseInt(props.xxl);

		const dynamicClasses = {
			col: !isNaN(colNum) && colNum > 0 && colNum < 13,
			[`col-${colNum}`]: !isNaN(colNum) && colNum > 0 && colNum < 13,
			[`col-sm-${smColNum}`]:
			!isNaN(smColNum) && smColNum > 0 && smColNum < 13,
			[`col-md-${mdColNum}`]:
			!isNaN(mdColNum) && mdColNum > 0 && mdColNum < 13,
			[`col-lg-${lgColNum}`]:
			!isNaN(lgColNum) && lgColNum > 0 && lgColNum < 13,
			[`col-xl-${xlColNum}`]:
			!isNaN(xlColNum) && xlColNum > 0 && xlColNum < 13,
			[`col-xxl-${xlColNum}`]:
			!isNaN(xxlColNum) && xxlColNum > 0 && xxlColNum < 13,
		};

		return () => {
			return h(
				"div",
				{
					class: dynamicClasses,
				},
				slots.default && slots.default()
			);
		};
	},
});
</script>
