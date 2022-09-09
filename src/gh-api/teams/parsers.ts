import { GithubTeam } from "./types";

export function parseTeamFromNode(node: HTMLLIElement): GithubTeam {
  const nameAnchorTag = node.querySelectorAll("a")[1];
  const img = node.querySelector("img");
  if (img == undefined) throw new Error("Could not find GithubTeam Avatar");
  if (nameAnchorTag.textContent == null)
    throw new Error("Could not find text content");

  const qualifiedName = nameAnchorTag.textContent.trim();
  const [organizationName] = qualifiedName.split("/");
  const avatarUrl = img.src;
  const title = img.alt;
  const teamUrl = nameAnchorTag.href;
  return {
    qualifiedName,
    organizationName,
    avatarUrl,
    title,
    teamUrl,
  };
}

export function parseTeamsFromResponse(doc: Document): GithubTeam[] {
  const teamNodes = [...doc.querySelectorAll("li")];
  const teams = teamNodes.map(parseTeamFromNode);
  return teams;
}
