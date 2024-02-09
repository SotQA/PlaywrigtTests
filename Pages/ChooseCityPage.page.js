class CityToWork {
  constructor(page) {
    this.page = page;
    this.cityDropdown = '//select[@name="city_driver_operates"]';
    this.listOfCities = '//select[@name="city_driver_operates"]/option';
    this.proceedButton = '//button[@class="multiform-button primary"]';
  }

  async collectCities() {
    return await this.page.$$(this.listOfCities);
  }

  async chooseCityInDropdown(cityName) {
    const listOfCities = await this.collectCities();

    for(const city of listOfCities){
      const cityName = await city.textContent();
      if(cityName.includes(cityName)){
        await city.click();
        return;
      }
    }
  }
}
export const ChooseCityPage = CityToWork;
