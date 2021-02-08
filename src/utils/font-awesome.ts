import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faArrowLeft,
  faEnvelopeOpenText,
  faCloudDownloadAlt,
  faEye,
  faBuilding,
  faClock,
  faMicrochip,
  faUserCircle,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(
  faGithub,
  faLinkedinIn,
  faTwitter,
  faSearch,
  faArrowLeft,
  faEnvelopeOpenText,
  faCloudDownloadAlt,
  faEye,
  faBuilding,
  faClock,
  faMicrochip,
  faUserCircle,
  faAt
);
