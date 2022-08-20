import classes from "./DisplayCard.module.css"
function DisplayCard(props)
{

    return(
        <div className={classes.card}>
            {props.children}
        </div>
    )
}
export default DisplayCard;