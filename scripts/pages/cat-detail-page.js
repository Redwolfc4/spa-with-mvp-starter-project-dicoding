import { parseActivePathName } from "../routes/url-parser.js";

class CatDetailPage {
  #presenter;
  async render() {
    return `
            <div id="cat-detail"></div>

            <p>Oke, sudah cukup. Kita bisa kembali ke <a href="#/">halaman home</a>.</p>
        `;
  }

  async afterRender() {
    // Do something...
    const { id } = parseActivePathName();
    console.log(id);

    this.#presenter = new CatDetailPresenter(id, {
      model: CatsLocal,
      view: this,
    });

    await this.#presenter.getCatDetail();
  }

  showCat = (cat) => {
    const html = generateCatDetailTemplate(cat);
    document.getElementById("cat-detail").innerHTML = html;
  };
}

export default CatDetailPage;
