class ElNino {
  constructor(page) {
    //Storing our Web elements in the constructor
    this.page = page;
    this.ELNINO_URL =
      "https://takeaway-recruitment-api.k.elnino-staging.com/it-en/courier";
    this.selectCountryButton = '//div[@id="country_button"]';
    this.applyNowButton = '//a[@id="signup_form_button"]';
    this.countriesList = '//li[@class="country_list_item"]';
    this.languageList = '//li[@class="language_list_item"]';
  }

  //Methods that return our lists of Web elements so that we can store elements in them
  async collectListOfCountries() {
    return await this.page.$$(this.countriesList);
  }

  async collectListOfLanguages() {
    return await this.page.$$(this.languageList);
  }

  //Method which clicks on the country based on the text provided into it
  async chooseCountry(countryNameToMatch) {
    const listOfElements = await this.collectListOfCountries();

    for (const country of listOfElements) {
      const countryText = await country.textContent();
      if (countryText.includes(countryNameToMatch)) {
        await country.click();
        return;
      }
    }
  }

  async chooseLanguage(languageToMatch) {
    const listOfLanguages = await this.collectListOfLanguages();

    for (const language of listOfLanguages) {
      const languageText = await language.textContent();
      if (languageText.includes(languageToMatch)) {
        await language.click();
        return;
      }
    }
  }
}
export const ElNinoPage = ElNino;
