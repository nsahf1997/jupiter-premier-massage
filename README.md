# Jupiter Premier Massage & Bodywork

A responsive marketing website for Jupiter Premier Massage & Bodywork in Jupiter, Florida.

## Run locally

1. Install Node.js 22 or newer.
2. Install dependencies with `npm install`.
3. Start the local site with `npm run dev`.
4. Open `http://localhost:3000`.

## Update the site

- Main page content: `app/page.tsx`
- Styling and responsive design: `app/globals.css`
- SEO and social sharing: `app/layout.tsx`
- Client reviews: `content/reviews.json`
- Logo and headshot images: `public/images/`

The temporary booking destination is set near the top of `app/page.tsx` as `BOOKING_URL`. Replace `#booking` with the final booking URL when it is available.

When the public website URL is known, set `NEXT_PUBLIC_SITE_URL` in Vercel so social sharing links use the production address.

## Contact details

Phone and email placeholders appear in the footer. When those details are available, add them with `tel:` and `mailto:` links so visitors can contact the business from mobile devices.

## Build and deploy

Run `npm run build` to create a production build. The project is ready to import into Vercel using the standard framework settings. Add `NEXT_PUBLIC_SITE_URL` as an environment variable after the domain is connected.

## Content notes

- Do not collect health or medical information through this marketing site.
- Avoid guarantees or medical claims when updating service copy.
- Keep the service menu limited to Relaxation Massage and Pain Relief Massage until the business is ready to add more offerings.
