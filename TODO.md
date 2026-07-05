# Trafalgar High School — Website Redesign TODO

## ✅ Completed
- Full Next.js App Router restructuring
- Migrating dump of flat files into domain-specific component folders (`app/`, `components/`, `data/`)
- Fixing all TypeScript errors and missing prop bugs across components
- Auto-generation of missing routes from the architecture plan
- Creation of the `public/placeholders/` directory and dummy asset files

## 🚧 Needs Review
- Validate the new directory structure with the broader school team.
- Confirm if the current component mapping meets long-term maintainability needs.

## ⏳ Remaining
- Gather actual photography to replace `public/placeholders/` images.
- Populate `data/*.ts` files with real school information (e.g., real staff members, actual history texts).
- Connect dynamic pages (News, Events, Achievements) to an actual Headless CMS or backend if required later.

## 💡 Future Improvements
- Implement SEO metadata tags (`metadata` exports) across all `app/**/page.tsx` routes.
- Integrate a real CMS (like Sanity or Payload CMS).
- Add rich animations (framer-motion) once the core content and structure are approved.
