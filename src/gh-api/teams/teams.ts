import { parse } from "../../utils/parse";
import { parseTeamsFromResponse } from "./parsers";
import { GithubTeam } from "./types";

async function storageGet(key): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, (items) => {
      resolve(items[key]);
    });
  });
}

async function storageSet(key, data): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: data }, () => {
      console.log("set chrome storage", { [key]: data });
      resolve(true);
    });
  });
}

export async function getTeams(): Promise<GithubTeam[]> {
  const cachedData = await storageGet("bgh-teams");
  // if (cachedData != undefined) {
  //   return JSON.parse(cachedData);
  // }
  if (cachedData != undefined) {
    try {
      if (cachedData.length > 0) return cachedData;
      console.log(cachedData);
    } catch (err) {}
  }
  console.log("Cache miss: getTeams()");
  const headers = { accept: "text/html", "x-requested-with": "XMLHttpRequest" };
  const resp = await fetch(
    "https://github.com/dashboard/ajax_your_teams?location=left&button=",
    { headers }
  );
  const html = await resp.text();
  // const p = new DOMParser();
  // const doc = p.parseFromString(html, "text/html");
  const doc = await parse(html);
  const teams = parseTeamsFromResponse(doc);
  console.log("Fetched teams", teams);
  await storageSet("bgh-teams", teams);
  return teams;
}
