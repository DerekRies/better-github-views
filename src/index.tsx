import { getTeams } from "./gh-api";
import { queryForTeamReview } from "./gh-api/utils";
import { MenuItemProps, Select } from "./gh-views/Select";
import { renderToString } from "./jsx-runtime/jsx-runtime";
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
