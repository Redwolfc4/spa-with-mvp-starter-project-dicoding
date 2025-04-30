import sleep from "../utils.js";

class CatDetailPresenter {
  #catId;
  #model;
  #view;

  constructor(catId, { model, view }) {
    this.#catId = catId;
    this.#model = model;
    this.#view = view;
  }

  async getCatDetail() {
    this.#view.showLoading();
    const cat = await this.#model.getCatById(this.#catId);
    await sleep(5000);
    this.#view.hideLoading();
    this.#view.showCat(cat);
  }
}

export default CatDetailPresenter;
