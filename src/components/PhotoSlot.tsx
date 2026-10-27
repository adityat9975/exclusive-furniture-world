import { useState } from "react";
import Illustration from "./Illustration";

type Props = {
  /** File name without extension, looked up as public/images/<name>.jpg */
  name: string;
  art: Parameters<typeof Illustration>[0]["name"];
  alt: string;
  ratio: string;
  tint?: string;
  className?: string;
};

/**
 * Shows public/images/<name>.jpg when the file exists. Until then it shows a drawn
 * placeholder, and the box keeps the same shape so the layout never jumps.
 */
export default function PhotoSlot({ name, art, alt, ratio, tint = "var(--t-blue)", className = "" }: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio, background: tint }}>
      <div className="photo-art" hidden={loaded}>
        <Illustration name={art} />
      </div>
      <img
        src={`${import.meta.env.BASE_URL}images/${name}.jpg`}
        alt={loaded ? alt : ""}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
