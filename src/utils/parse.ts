const jsdom = NODE && require("jsdom");

/**
 * Environment specific DOM Parser. Parses a string into an
 * HTML Document.
 */
export async function parse(s: string): Promise<Document> {
  if (jsdom) {
    const { JSDOM } = jsdom;
    const dom = new JSDOM(s);
    return dom.window.document;
  }
  const p = new DOMParser();
  return p.parseFromString(s, "text/html");
}
