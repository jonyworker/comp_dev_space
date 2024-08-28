export const splitArrayAt = (arr, splitCount) => {
    const currList = arr.slice(0, splitCount);
    const restList = arr.slice(splitCount);

    return { currList, restList };
};