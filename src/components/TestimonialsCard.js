function TestimonialsCard(props) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.card.img} alt="card" />
            </div>
            <div className="card-body">
                <p>{props.card.description}</p>
                <h4>{props.card.author}</h4>
            </div>
        </div>
    )
}

export default TestimonialsCard