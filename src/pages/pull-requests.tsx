import { getTeams } from "../gh-api";
import { queryForTeamReview } from "../gh-api/utils";
import { MenuItemProps, Select } from "../gh-views/Select";

export async function pullRequestsPage() {
  const teams = await getTeams();
  const items: MenuItemProps[] = teams.map((team) => {
    return {
      avatarUrl: team.avatarUrl,
      checked: false,
      href: queryForTeamReview(team.qualifiedName),
      label: team.qualifiedName,
    };
  });

  const teamSelect = Select({
    id: "team-select-menu",
    buttonText: "Team",
    items,
    label: "Filter by Team",
  });

  const render = (el) => {
    const existingHeaderBar = [
      ...document.querySelectorAll(".table-list-header-toggle"),
    ].slice(-1)[0];
    existingHeaderBar.prepend(el);
  };
  render(teamSelect);
  setTimeout(() => {
    // sometimes it doesn't appear, in relation to the time
    // difference between navigation changes and rendering
    // so we should check to see if it was rendered, and if
    // not render again at some point in the future.
    const renderedTeamSelect = document.querySelector("#team-select-menu");
    if (renderedTeamSelect == undefined) {
      console.log("Rerendering Team Select");
      render(teamSelect);
    }
  }, 500);
}
