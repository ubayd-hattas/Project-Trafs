# Content awaiting school confirmation

The demo routes do not render sample news, dummy events, invented statistics, unconfirmed staff directories, empty downloads, or forms that send nowhere. Old unused seed data remains in data/ as a record of the first prototype.

## Live content

- News on the home page and /news-events is read from the school's WordPress site (trafalgarhighschool.co.za/wp-json/wp/v2/posts) and refreshes hourly. Staff keep posting in WordPress. If WordPress is unreachable, the pages show a notice, a link to the school news page and archive photographs instead.
- Term dates live in data/termDates.ts (source: live homepage calendar, read 31 October 2026). Update this file when the school publishes 2027 dates. Once every date has passed, the pages say the next dates are not published yet and give the office number.

## Still needed before official adoption

- The Class of 2025 matric result. The site shows the verified Class of 2024 result (96.4%).
- 2027 term dates.
- Approved annual fees, payment instructions and current school policies.
- Confirmation that Trafalgarhigh2021@gmail.com is still the main office inbox (it is the address on the live site as of 31 October 2026), plus official social accounts.
- Approved curriculum combinations and current learner support arrangements.
- A higher-resolution Vice Principal portrait.
- School permission to use the photographs and WordPress posts on this proposal.

See qa/asset-sources.md for provenance. The proposal is noindex until NEXT_PUBLIC_OFFICIAL_SITE is set to true; see docs/HANDOVER.md.
