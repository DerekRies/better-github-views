export interface GithubTeam {
  /**
   * The fully qualified name that is used to search for things
   * matching this team in the github application
   * @example elationemr/frontend
   */
  qualifiedName: string;
  organizationName: string;
  /**
   * The human readable title associated with a team. If the
   * qualified name were `elationemr/entops` this could be
   * "Enterprise Operations"
   */
  title: string;
  avatarUrl: string;
  teamUrl: string;
}
