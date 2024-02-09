import { test } from "@playwright/test";
import { ElNinoPage } from "../Pages/ElNinoPage.page";
import { ChooseCityPage } from "../Pages/ChooseCityPage.page";
import { beforeAll } from "@playwright/test";
import { afterAll } from "@playwright/test";
import { describe } from "@playwright/test";

let page;
let elNinoPage;
let chooseCityPage;

test.beforeAll(async () => {
  console.log("Beforeall");
});

test.afterAll(async () => {
  console.log("Aftereall");
});

test.beforeEach(async ({ context }) => {
  page = await context.newPage();
  elNinoPage = new ElNinoPage(page);
  chooseCityPage = new ChooseCityPage(page);
  await page.goto(elNinoPage.ELNINO_URL);
});

test.afterEach(async () => {
  console.log("AfterEach");
});

test.describe("Registreting Austrian Lead, positive check", () => {
  test("Register Austrian Lead", async ({ page }) => {
    await page.click(elNinoPage.selectCountryButton);
    await elNinoPage.collectListOfCountries();
    await elNinoPage.chooseCountry("Austria");
    await page.click(elNinoPage.selectCountryButton);
    await elNinoPage.collectListOfLanguages();
    await elNinoPage.chooseLanguage("English");
    await page.click(elNinoPage.applyNowButton);
    await page.click(chooseCityPage.cityDropdown);
    await chooseCityPage.collectCities();
    // await chooseCityPage.chooseCityInDropdown("Dornbirn");
    await page.selectOption(chooseCityPage.cityDropdown, "Linz");
    await page.close();
  });
});
