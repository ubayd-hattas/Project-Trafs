# Trafalgar High School — Placeholders Policy

Because full, final, up-to-date content and photography has not been secured, this project heavily relies on placeholder components. 

## Asset Placeholders

All placeholder images are strictly placed inside `public/placeholders/`. 
The following placeholder graphics currently exist and are actively referenced throughout the application:
- `hero.jpg`
- `history.jpg`
- `principal.jpg`
- `students.jpg`
- `science-lab.jpg`
- `sports.jpg`
- `choir.jpg`
- `assembly.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`
- `hero-video.mp4`

**How to replace:**
Simply overwrite the corresponding files in the `public/placeholders/` directory with a real JPEG/MP4 file (e.g., save your new school front image as `public/placeholders/hero.jpg`), and Next.js will automatically update the interface without any code changes needed!

## Content Placeholders

Factual information has been reused where possible. However, missing or dynamic datasets (such as News, Staff, Events, Gallery, Alumni) use hardcoded dummy text inside the `data/` folder.
- **News**: `data/news.ts`
- **Events**: `data/events.ts`
- **Alumni**: `data/alumni.ts`
- **Achievements**: `data/achievements.ts`
- **Gallery**: `data/gallery.ts`

**How to replace:**
Open any `.ts` file inside the `data/` directory and replace the mock text strings with real data. Long-term, this data should be fetched from a CMS instead of being hardcoded.
