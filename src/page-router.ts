type HandlerTuple = [string, Function];

/**
 * Because most of github uses turbolinks, we don't get
 * full page reloads. For dispatching certain custom views
 * on specific paths we need to observe the url. There's
 * a few ways we can do this, but I've opted for using
 * rAF. popstate events won't work as they don't capture
 * pushState changes.
 */
export class PageRouter {
  private currentUrl: string;
  private registeredHandlers: HandlerTuple[] = [];

  constructor() {
    this.currentUrl = window.location.href;
    // this.requestCallback(this.step);
  }

  public start() {
    const url = new URL(this.currentUrl);
    this.handleNavigationChange(url.pathname);
    this.requestCallback(this.step);
  }

  public on(path, handler) {
    this.registeredHandlers.push([path, handler]);
  }

  private step = () => {
    if (window.location.href !== this.currentUrl) {
      const url = new URL(window.location.href);
      this.currentUrl = window.location.href;
      this.handleNavigationChange(url.pathname);
    }

    this.requestCallback(this.step);
  };

  private requestCallback = (fn: (time: number) => void) => {
    window.requestAnimationFrame(fn);
  };

  private handleNavigationChange(path: string) {
    console.log("handleNavigationChange", path);
    // Find matching route definitions and invoke
    // the registered handlers.
    for (let i = 0; i < this.registeredHandlers.length; i++) {
      const [route, handler] = this.registeredHandlers[i];
      if (path.startsWith(route)) {
        console.log("Registered route: ", route);
        handler();
      }
    }
  }
}
