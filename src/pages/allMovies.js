import classes from "./allMovies.module.css"
import {Link} from "react-router-dom";                             
                                                                   
function MovieList() {                                             
                                                                   
    return (                                                       
        <div className={classes.listBody}>                         
            <ul>                                                   
                <li>                                               
                    <div className={classes.collection}>           
                        <Link to={"/Movie/4"}>                     
                            <p>Episode 1</p>                       
                            <img src={"./Ep1.jpg"} alt="Ep1"></img>
                        </Link>                                    
                    </div>                                         
                </li>                                              
                <li>                                               
                    <div className={classes.collection}>           
                        <Link to={"/Movie/5"}>                     
                            <p>Episode 2</p>
                            <img src={"./Ep2.jpg"} alt="Ep2"></img>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={classes.collection}>
                        <Link to={"/Movie/6"}>
                            <p>Episode 3</p>
                            <img src={"./Ep3.jpg"} alt="Ep3"></img>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={classes.collection}>
                        <Link to="/Movie/1">
                            <p>Episode 4</p>
                            <img src={"./Ep4.jpg"} alt="Ep4"></img>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={classes.collection}>
                        <Link to={"/Movie/2"}>
                            <p>Episode 5</p>
                            <img src={"./Ep5.jpg"} alt="Ep5"></img>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className={classes.collection}>
                        <Link to={"/Movie/3"}>
                            <p>Episode 6</p>
                            <img src={"./Ep6.jpg"} alt="Ep6"></img>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MovieList;
