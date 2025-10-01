import { FooterStyles } from "../../css";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import ButtonSocial from "./ButtonSocial";

export default function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.content}>
        <div>
          <p className={FooterStyles.copyright}>© 2025 Movie List. All rights reserved.</p>
        </div>
        <div className={FooterStyles.madeBy}>
          <div className={FooterStyles.linkContainer}>
            <ButtonSocial href="https://github.com/bruhhhyannnn" icon={<GithubLogo size={24} weight="fill" />} label="GitHub" />
            <ButtonSocial href="https://www.linkedin.com/in/bryanmangapit" icon={<LinkedinLogo size={24} weight="fill" />} label="LinkedIn" />
          </div>
          <p className={FooterStyles.copyright}>Made by Bryan Mangapit</p>
        </div>
      </div>
    </footer>
  );
}
