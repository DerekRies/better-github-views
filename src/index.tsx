import { PageRouter } from "./page-router";
import { pullRequestsPage } from "./pages/pull-requests";

async function main() {
  const manifest = chrome.runtime.getManifest();
  console.log(`Initializing Extension: ${manifest.name}`);
  const router = new PageRouter();
  router.on("/pulls", pullRequestsPage);
  router.start();
}

main();
