export const getTargetPosition = (
	position,
	childrenSize,
	placement,
	gap,
	isContentFluid
) => {
	if (placement === 'top') {
		return {
			top: `${position.top}px`,
			left: `${position.left}px`,
			transform: `translate(calc(${childrenSize.width / 2}px - 50%), calc(-100% - ${gap}))`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'bottom') {
		return {
			top: `${position.top + childrenSize.height}px`,
			left: `${position.left}px`,
			transform: `translate(calc(${childrenSize.width / 2}px - 50%), ${gap})`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'left') {
		return {
			top: `${position.top}px`,
			left: `${position.left}px`,
			transform: `translate(calc(-100% - ${gap}), calc(${childrenSize.height / 2}px - 50%))`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'right') {
		return {
			top: `${position.top}px`,
			left: `${position.left + childrenSize.width}px`,
			transform: `translate(${gap}, calc(${childrenSize.height / 2}px - 50%))`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'top-left') {
		return {
			top: `${position.top}px`,
			left: `${position.left}px`,
			transform: `translate(0, calc(-100% - ${gap}))`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'top-right') {
		return {
			top: `${position.top}px`,
			left: `${position.left + childrenSize.width}px`,
			transform: `translate(calc(-100%), calc(-100% - ${gap}))`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'bottom-left') {
		return {
			top: `${position.top + childrenSize.height}px`,
			left: `${position.left}px`,
			transform: `translate(0, ${gap})`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'bottom-right') {
		return {
			top: `${position.top + childrenSize.height}px`,
			left: `${position.left + childrenSize.width}px`,
			transform: `translate(calc(-100%), ${gap})`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'left-top') {
		return {
			top: `${position.top}px`,
			left: `${position.left}px`,
			transform: `translate(calc(-100% - ${gap}), 0)`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'left-bottom') {
		return {
			top: `${position.top + childrenSize.height}px`,
			left: `${position.left}px`,
			transform: `translate(calc(-100% - ${gap}), -100%)`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'right-top') {
		return {
			top: `${position.top}px`,
			left: `${position.left + childrenSize.width}px`,
			transform: `translate(${gap}, 0)`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}

	if (placement === 'right-bottom') {
		return {
			top: `${position.top + childrenSize.height}px`,
			left: `${position.left + childrenSize.width}px`,
			transform: `translate(${gap}, -100%)`,
			width: `${isContentFluid ? childrenSize.width + 'px' : 'fit-content'}`,
		};
	}
};
