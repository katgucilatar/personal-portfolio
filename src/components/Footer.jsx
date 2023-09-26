// github, linkedin, slack
import { Icon } from '@rsuite/icons';
import * as faGithub from '@fortawesome/free-brands-svg-icons/faGithub';
import * as faLinkedin from '@fortawesome/free-brands-svg-icons/faLinkedin';
import * as faSlack from '@fortawesome/free-brands-svg-icons/faSlack';

const FaSvgIcon = ({ faIcon, ...rest }) => {
  const { width, height, svgPathData } = faIcon;
  return (
    <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
      <path d={svgPathData}></path>
    </svg>
  );
};

const Footer = () => (
    <div className="icon-list">
        <div>
            <Icon as={FaSvgIcon} faIcon={faGithub} style={{color: "#ea93ec"}} />
            <p>Github</p>
        </div>
        <div>
            <Icon as={FaSvgIcon} faIcon={faLinkedin} style={{color: "#68deee"}} />
            <p>LinkedIn</p>
        </div>
        <div>
            <Icon as={FaSvgIcon} faIcon={faSlack} style={{color: "#7b4bec"}} />
            <p>Slack</p>
        </div>
    </div>
  );

  export default Footer;