import { SectionStyles } from "../../css";

export default function Section({ children }) {
  return (
    <section className={SectionStyles.section}>
      <div className={SectionStyles.content}>{children}</div>
    </section>
  );
}
