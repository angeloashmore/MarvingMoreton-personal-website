import classes from "./Footer.module.css";
import React from "react";
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer(props) {
  return (
    <React.Fragment>
      <div className={classes["section--footer"]}>
        <div >
              <ul className={classes["footer-nav"]}>
                <li><Link className={classes["footer-link"]}  href="#projects">Full-stack Developer</Link></li>
                <li><Link className={classes["footer-link"]} href="#expertises">SEO</Link></li>
                <li><Link className={classes["footer-link"]} href="#skills">Contact</Link></li>
                <li><Link className={classes["footer-link"]} href="#resume">Blog</Link></li>
              </ul>
            </div>
            <div className={classes.social}>
              <ul className={classes["social-links"]}>

                <li> <Link className={classes["footer-link"]} href="https://www.linkedin.com/in/marving-moreton/" target="_blank"><LinkedInIcon sx={{ fontSize: 30 }}/></Link></li>
                <li> <Link className={classes["footer-link"]} href="https://github.com/MarvingMoreton" target="_blank"><GitHubIcon sx={{ fontSize: 30 }}/></Link></li>
                <li> <Link className={classes["footer-link"]} href="https://twitter.com/Marving9723" target="_blank"></Link><TwitterIcon sx={{ fontSize: 30 }}/></li>
                <li> <Link className={classes["footer-link"]} href="https://api.whatsapp.com/send?phone=+33782147939" target="_blank"><WhatsAppIcon sx={{ fontSize: 30 }}/></Link></li>
              </ul>
              </div>

              <div className={classes.line}>
                <hr />
              </div>
              <div className={classes.copyright}>
                <span>&copy; 2022, designed and developed by Marving
                Moreton.</span>
              </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
