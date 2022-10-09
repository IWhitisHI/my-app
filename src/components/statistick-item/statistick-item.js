import "./statistic-item.css"

const StatistickItem = () => {
    return (
        <div className="container-item">
            <div className="statistics">
                <div className="statistics-item">
                    <div className="statistics-count">42</div>
                    <div className="statistics-text">web design projects</div>
                </div>
                <div className="statistics-item">
                    <div className="statistics-count">123</div>
                    <div className="statistics-text">happy client</div>
                </div>
                <div className="statistics-item">
                    <div className="statistics-count">15</div>
                    <div className="statistics-text">award winner</div>
                </div>
                <div className="statistics-item">
                    <div className="statistics-count">99</div>
                    <div className="statistics-text">cup of coffee</div>
                </div>
                <div className="statistics-item">
                    <div className="statistics-count">24</div>
                    <div className="statistics-text">members</div>
                </div>
            </div>
        </div>
    );
}

export default StatistickItem;