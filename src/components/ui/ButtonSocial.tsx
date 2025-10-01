import { ReactNode } from "react";
import { ButtonSocialStyles } from "../../css";

type ButtonIconProps = {
  href: string;
  icon: ReactNode;
  label?: string;
};

export default function ButtonIcon({ href, icon, label }: ButtonIconProps) {
  return (
    <a href={href} className={ButtonSocialStyles.link} target="_blank" aria-label={label}>
      <div className={ButtonSocialStyles.iconWrapper}>{icon}</div>
    </a>
  );
}
