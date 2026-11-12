# Roam

Frontend foundation for a Vietnamese local-discovery experience. The current route is a coming-soon landing page; the project is structured to add discovery, routes and saved places as independent features.

## Requirements

- Node.js 24+
- pnpm 11+

## Start locally

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command             | Purpose                 |
| ------------------- | ----------------------- |
| `pnpm dev`          | Start local server      |
| `pnpm build`        | Create production build |
| `pnpm lint`         | Run ESLint              |
| `pnpm format:check` | Verify formatting       |
| `pnpm typecheck`    | Run TypeScript checks   |
| `pnpm test`         | Run Vitest              |

## Architecture

- `src/app`: App Router routes and global layout.
- `src/features`: feature-owned UI and logic.
- `src/components`: shared site components.
- `src/lib/api`: Axios client and API schemas. Set `NEXT_PUBLIC_API_URL` when a backend exists.
- `src/providers`: app-wide providers, including TanStack Query.
- `src/stores`: Zustand client state. Keep server data in TanStack Query; only cross-route client/UI state belongs here.
- `src/config`: brand and product configuration.

## Quality workflow

Initialize Git, then run `pnpm exec husky` to enable the provided hooks. Commits follow Conventional Commits, for example `feat: add place card`.

GitHub Actions runs formatting, linting, type checks, tests and the production build on every push and pull request.
