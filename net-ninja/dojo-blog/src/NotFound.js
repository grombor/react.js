import { Link } from "react-router-dom"

const notFound = () => {
    return (
        <div className="not-found">
            <h2>That page cannot be found</h2>
            <Link to="/">back to home page</Link>
        </div>
    )
}

export default notFound
