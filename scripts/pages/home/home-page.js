import CatsLocal from "../../data/local/cats.js";
import { generateCatItemTemplate } from "../../templates.js";
import HomePresenter from "./home-presenter.js";
class HomePage {
  #presenter;
  async render() {
    return `
            <h1 class="content-title">Home Page</h1>
            <p>Ini adalah konten halaman utama.</p>

            <div id="cats"></div>

            <p>Mari kita cek <a href="#/about">halaman about</a>!</p>`;
  }

  async afterRender() {
    // Do something...
    this.#presenter = new HomePresenter({
      model: CatsLocal,
      view: this,
    });

    await this.#presenter.showCats();
  }

  showCats = (cats) => {
    //  TODO: Implementation

    // gabungan li tempalate
    const html = cats.reduce(
      (accumulator, cat) => accumulator.concat(generateCatItemTemplate(cat)),
      ""
    );

    //   masukkan li ke parent ul
    document.getElementById("cats").innerHTML = `
        <ul class="cats-list">${html}</ul>
      `;
  };

  showLoading = () => {
    console.log("jalan");
    document.getElementById("loading-container").innerHTML = `
            <div class="loader"></div>
        `;
  };

  hideLoading = () => {
    document.getElementById("loading-container").innerHTML = "";
  };
}

export default HomePage;
