const puppeteer = require("puppeteer");
const readlineSync = require('readline-sync');

// (async() => {
// })();
async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // const moedaBase = "dolar";
    // const moedaFinal = "real";
    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Informe uma moeda final: ') || 'real';
    const dolarRealUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57.1692j0j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(dolarRealUrl);
    // await page.screenshot({ path: "dale.png" });

    const resultado = await page.evaluate(() => {
        return document.querySelector("#knowledge-currency__updatable-data-column > div.H07hi > table > tbody > tr:nth-child(3) > td:nth-child(1) > input").value;
    });

    console.log(dolarRealUrl);

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

    //await browser.close();
}

robo();