import {Link} from 'react-router-dom'

function HighlightsCard(props) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.card.img} alt="card" />
            </div>
            <div className="card-title">
                <h3>{props.card.title}</h3>
                <h3 className="card-price">{props.card.price}</h3>
            </div>
            <div className="card-body">
                <p>{props.card.description}</p>
                <Link to="/orderonline" className="nav-item"><h3>Order online</h3></Link>
            </div>
        </div>
    )
}

export default HighlightsCard