export interface MenuItemProps {
  checked: boolean;
  avatarUrl: string;
  label: string;
  href: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <a
      href={props.href}
      className="SelectMenu-item"
      aria-checked={props.checked}
      role="menuitemcheckbox"
      style=""
    >
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check"
      >
        <path
          fill-rule="evenodd"
          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
        ></path>
      </svg>
      <img
        className="avatar mr-2 avatar-user"
        width="20"
        height="20"
        src={props.avatarUrl}
      />
      <strong class="mr-2">{props.label}</strong>
    </a>
  );
}

export interface DetailMenuProps {
  label: string;
  selectId: string;
  items: MenuItemProps[];
}

export function DetailMenu(props: DetailMenuProps) {
  return (
    <details-menu
      className="SelectMenu right-0"
      role="menu"
      aria-label={props.label}
    >
      <div className="SelectMenu-modal">
        <div className="SelectMenu-header">
          <span className="SelectMenu-title">{props.label}</span>
          <button
            className="SelectMenu-closeButton"
            type="button"
            data-toggle-for={props.selectId}
          >
            <svg
              aria-label="Close menu"
              role="img"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-x"
            >
              <path
                fill-rule="evenodd"
                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="SelectMenu-list select-menu-list">
          <div>
            {props.items.map((item) => (
              <MenuItem {...item} />
            ))}
          </div>
        </div>
      </div>
    </details-menu>
  );
}

export interface SelectProps {
  id: string;
  buttonText: string;
  label: string;
  items: MenuItemProps[];
}

export function Select(props: SelectProps) {
  return (
    <details
      className="details-reset details-overlay d-inline-block position-relative px-3"
      id={props.id}
    >
      <summary
        data-hotkey="o"
        aria-haspopup="menu"
        data-ga-click="Pull Requests, Table filter, Team"
        data-view-component="true"
        class="btn-link"
        role="button"
      >
        {" "}
        {props.buttonText} <span class="dropdown-caret hide-sm"></span>
      </summary>
      <DetailMenu label={props.label} selectId={props.id} items={props.items} />
    </details>
  );
}
