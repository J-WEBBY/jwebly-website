import { OrbMark } from "@/components/orb-mark";

/**
 * Joe's orb mark — the shared 3D Jwebly orb (glossy white sphere + teal rim),
 * used on the launcher pill and the panel header.
 */
export function JoeOrb({ size = 22 }: { size?: number }) {
  return <OrbMark size={size} variant="light" />;
}
