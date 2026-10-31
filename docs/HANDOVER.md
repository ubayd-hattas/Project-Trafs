# Moving trafalgarhighschool.co.za to the new website

For whoever looks after the school's domain and WordPress site (a staff member or the web hosting company). Allow about an hour, plus up to a day for the domain change to spread.

## How the two sites fit together

- The **new website** runs on Vercel and is built from this GitHub repository. It has every public page: home, admissions, academics, news, contact and so on.
- The **existing WordPress site keeps running**, moved to a subdomain such as `news.trafalgarhighschool.co.za`. Staff log in and post news there exactly as they do today. The new website reads those posts every hour and shows them on its home page and News page.
- The school's email (admin@trafalgarhighschool.co.za) is a Gmail account and is not affected by any of this.

Nothing is deleted at any step. If something goes wrong, changing the DNS records back to their old values restores the old site.

## Before you start

1. Write down the current DNS records for `trafalgarhighschool.co.za` (from the domain registrar or hosting control panel). These are your undo values.
2. Agree who owns the Vercel project. Either Ubayd keeps hosting it and adds the school's account, or the project is transferred to a Vercel account the school controls (Vercel > Project > Settings > General > Transfer Project).

## Step 1: Move WordPress to a subdomain

Ask the hosting company to do this if you are unsure. It is a routine request.

1. In the hosting control panel, create the subdomain `news.trafalgarhighschool.co.za` pointing at the same folder WordPress is installed in.
2. Make sure the subdomain has an SSL certificate (https). Most hosts issue one automatically.
3. In WordPress, go to Settings > General and change both **WordPress Address** and **Site Address** to `https://news.trafalgarhighschool.co.za`. You will be logged out; log back in at the new address.
4. Old posts contain links to the main domain. Run the free "Better Search Replace" plugin to replace `https://trafalgarhighschool.co.za` with `https://news.trafalgarhighschool.co.za` in the database. Take a backup first.
5. Check that `https://news.trafalgarhighschool.co.za/wp-json/wp/v2/posts` shows text (a list of posts), not an error.

## Step 2: Tell the new website where things are

In Vercel > Project > Settings > Environment Variables, add these for the Production environment:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_WORDPRESS_URL` | `https://news.trafalgarhighschool.co.za` |
| `NEXT_PUBLIC_SITE_URL` | `https://trafalgarhighschool.co.za` |
| `NEXT_PUBLIC_OFFICIAL_SITE` | `true` |

Then open Deployments, choose the latest one and click Redeploy. `NEXT_PUBLIC_OFFICIAL_SITE=true` lets Google index the site and removes the "proposal" wording.

## Step 3: Point the domain at the new website

1. In Vercel > Project > Settings > Domains, add `trafalgarhighschool.co.za` and `www.trafalgarhighschool.co.za`.
2. Vercel shows the exact DNS records to create (usually an A record for the main domain and a CNAME for www). Enter those at the registrar or hosting control panel, replacing the old A and CNAME records for `@` and `www`.
3. Do **not** change the `news` subdomain record from Step 1, and leave any MX (email) records alone.
4. Wait until Vercel shows both domains as "Valid Configuration". This can take from a few minutes to a day.

## Step 4: Check it worked

- `https://trafalgarhighschool.co.za` shows the new site, and the Latest news section shows recent posts.
- `https://trafalgarhighschool.co.za/wp-admin` takes staff to the WordPress login on the news subdomain.
- Old links such as `/about-us/` and `/past-exam-papers/` open the right page.
- Post a test news item in WordPress. It should appear on the new home page within an hour.

## Everyday updates after the move

| What | Where |
| --- | --- |
| News posts | WordPress, as today |
| Term dates | `data/termDates.ts` in this repository |
| Phone, email, matric result | `data/siteConfig.ts` |
| Principal and Vice Principal | `data/staff.ts` and `public/images/` |

Changes to those files go live a minute or two after they are pushed to GitHub. Ubayd can make them on request.
