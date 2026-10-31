import { siteConfig } from "@/data/siteConfig";

export function VisitBlock() {
  return (
    <section className="editorial-section section-tint" aria-labelledby="visit-heading">
      <div className="container-page">
        <p className="eyebrow">Contact the school office</p>
        <h2 id="visit-heading" className="section-heading mt-3 mb-10">
          Call, email or visit us.
        </h2>
        <dl className="visit-grid">
          <div>
            <dt>Telephone</dt>
            <dd>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd className="break-all">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}, {siteConfig.address.city}
              <br />
              <a href={siteConfig.mapsUrl}>Get directions</a>
            </dd>
          </div>
          <div>
            <dt>Office hours</dt>
            <dd>{siteConfig.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
