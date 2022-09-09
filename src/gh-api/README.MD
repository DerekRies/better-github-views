This is a client-api for the Github website. It explicitly does not use the actual Github REST API but uses the turbolinks rendered html instead to fetch data (how the web app fetches data). It does so in order to not require an additional token or configuration, your web browser already has a session.

That being said, it is awkward and requires parsing the DOM and turning it into data, hence this module.
