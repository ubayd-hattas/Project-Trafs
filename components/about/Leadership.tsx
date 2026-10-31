import Image from "next/image";
import { leadership } from "@/data/staff";
export function Leadership() {
  return (
    <div className="leadership-grid">
      {leadership.map((p) => (
        <article className="leader" key={p.id}>
          <div className="leader-photo">
            <Image src={p.image} alt={p.name} fill sizes="120px" />
          </div>
          <div>
            <h3>{p.name}</h3>
            <p>{p.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
