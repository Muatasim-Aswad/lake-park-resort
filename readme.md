The website currently does not need any build and does not use external libraries in production.
When netlify finds package.json it triggers an auto build. Therefore, the dev dependencies for formatting and linting can be installed running the following bash script from the base directory instead of including them directly in the repo.

```bash
chmod +x setup.sh && ./setup.sh
```
