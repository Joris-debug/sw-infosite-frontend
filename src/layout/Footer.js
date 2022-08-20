import classes from "./Footer.module.css"
import {Link} from "react-router-dom";
function Footer()
{
    return(
        <div className={classes.footer}>
            <div>
            <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/89771/chewbacca">Chewbacca</a> icon by <a rel="noreferrer" target="_blank" href="https://icons8.com">Icons8</a>
            </div>
            <Link to={"/contact"}>Contact</Link>
        </div>
    )
}
export default Footer;
