const Tour = ({tours,remove}) => {
    return(
        tours.map(tour=>{
            const {id, name,info,image,price} = tour
            return(
                <article key={id} className='list'>
                    <img src={image} alt={name} />
                    <div style={{position:"relative"}}>
                        <h1>{name}</h1>
                        <br/>
                        <p>{info}</p>
                        <br/>
                        <p className='price'>${price}</p>
                        <button onClick={()=>remove(id)}>Not Interested</button>
                    </div>
                </article>
            )
        })
    )
    }
    
    export default Tour