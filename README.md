# NextUI Docs

## Local Development Setup

1. Install [Python](https://python.org), [Poetry](https://python-poetry.org/docs/#installation)
   and [Bun](https://bun.sh)
2. Clone this repo with Git.
3. In a terminal, switch to the repo directory you just cloned.
4. CD into the marketing subdirectory.
5. Run `bun install` to download the marketing dependencies.
6. Run `bun run dev` to run the marketing website locally.
7. When marketing edits are complete, run `bun run build`. The static output will be copied into the `docs/_marketing`
   directory for mkdocs to serve.
8. Run `poetry sync` to download the dependencies.
9. Run `poetry run mkdocs serve` to launch the local environment.
10. Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.
11. Make changes to the wiki. Your changes will auto-reload and can be seen in the browser.



