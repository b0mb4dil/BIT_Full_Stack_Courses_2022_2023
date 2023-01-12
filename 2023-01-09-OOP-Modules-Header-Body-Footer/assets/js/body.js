export const body = async () => {
    const result = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const resultObject = (await result.text()).replace('[', '').replace(']', '');

    console.log(resultObject);

    return document.getElementById('main-par').textContent = resultObject;
}