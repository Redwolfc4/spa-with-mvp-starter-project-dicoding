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

    // Alternative DOM update for browsers that do not support view transition
    if (!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();

      return;
    }

    // Update DOM with view transition
    const transition = document.startViewTransition(async () => {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
    });
    console.log(transition);

    transition.updateCallbackDone.then(() => {
      console.log("callback transisi telah diekekusi.");
    });

    transition.ready.then(() => {
      console.log("view transisi telah siap.");
    });

    transition.finished.then(() => {
      console.log("view transisi telah selesai.");
    });
  }
}
