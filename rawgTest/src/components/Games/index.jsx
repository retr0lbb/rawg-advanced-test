export default (props)=>{
    return(
        <div>
            <img src={props.url}/>
            <p>
                {props.desc}
            </p>
        </div>
    );
}