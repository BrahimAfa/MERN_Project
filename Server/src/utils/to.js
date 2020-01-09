
// test it later and write the result here...
async function to(anyPromise) {
    let value = { error: null, result: null };
    try {
        value.result = await anyPromise();
    } catch (error) {
        value.error = error;
    }
    return value;
}