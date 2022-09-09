const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export function h(
  tag: string | Function,
  props: Record<string, any>,
  ...children
) {
  if (typeof tag === "function") return tag(props, children);
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name === "classname" || name === "className") {
      element.setAttribute("class", value.toString());
    } else if (name.startsWith("on") && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value);
    else element.setAttribute(name, value.toString());
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
}

export function render(targetElement: Node, renderedElement: HTMLElement) {
  targetElement.appendChild(renderedElement);
}

export function renderToString(renderedElement: HTMLElement) {
  return renderedElement.outerHTML;
}
