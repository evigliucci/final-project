export default ['apple', 'banana', 'orange', 'peach', "pear", "cherry"].reduce((res, item) => ({
    ...res,
    ... {
        [item]: Array(20).fill(0).map(_ => Math.floor(20 * Math.random()))
    }
}), {});