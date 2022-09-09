export function queryForTeamReview(teamName: string): string {
  const pieces = [
    "is:pr",
    "is:open",
    `team-review-requested:${teamName}`,
    "archived:false",
  ];
  return `/pulls?q=${pieces.map(encodeURIComponent).join("+")}`;
}
