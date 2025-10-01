import { SectionStyles } from "../../css";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className={SectionStyles.section}>
      <div className={SectionStyles.content}>{children}</div>
    </section>
  );
}
