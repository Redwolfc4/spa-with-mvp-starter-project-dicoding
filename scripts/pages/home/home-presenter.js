import sleep from "../../utils.js";
class HomePresenter {
  #model;
  #view;

  constructor({ model, view }) {
    this.#model = model;
    this.#view = view;
  }

  showCats = async () => {
    this.#view.showLoading();
    const cats = await this.#model.getAllCats();
    await sleep(5000);
    this.#view.showCats(cats);
    this.#view.hideLoading();
  };
}

export default HomePresenter;
