import { getActiveRoute } from "./routes/url-parser.js";
import routes from "./routes/routes.js";

export default class App {
  #content;

  constructor({ content }) {
    this.#content = content;
  }

  // lakukan render page
  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];

    // Get page instance
    const page = route();

    // masukkan html yang di render sesuai routingnya
    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}
