const Tour = ({tours,remove}) => {
    return(
        tours.map(tour=>{
            const {id, name,info,image,price} = tour
            return(
                <article key={id} className='list'>
                    <img src={image} alt={name} />
                    <div style={{position:"relative"}}>
                        <h4>{name}</h4>
                        <p>{info}</p>
                        <p>{price}</p>
                        <button onClick={()=>remove(id)} style={{width:"6.5rem",position: "absolute", right:0, bottom:"25%"}}>Remove</button>
                    </div>
                </article>
            )
        })
    )
    }
    
    export default Tour