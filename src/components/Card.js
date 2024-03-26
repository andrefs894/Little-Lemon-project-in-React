function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.card.img} />
            </div>
            <div className="card-title">
                <h3>{props.card.title}</h3>
                <h3 className="card-price">{props.card.price}</h3>
            </div>
            <div className="card-body">
                <p>{props.card.description}</p>
                <a href="#"><h3>Order a delivery</h3></a>
            </div>
        </div>
    )
}

export default Card