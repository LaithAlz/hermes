import styles from './SocialsIcons.module.css'
import Email from '../../assets/email.svg'
import Twitter from '../../assets/twitter.svg'
import LinkedIn from '../../assets/linkedin.svg'

function SocialsIcons(){
    return (
<div className={styles.socials}>
<img src={Twitter}  alt="Check out Hermes' Twitter"/>
<img src={LinkedIn}  alt="Check out Hermes' LinkedIn"/>
<img src={Email}  alt="Email Hermes directly"/>
</div>
    );
}

export default SocialsIcons