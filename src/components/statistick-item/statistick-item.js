import "./statistic-item.css"

const StatistickItem = () => {
    const statisticElement = [{name:'web design projects', number:42},
                              {name:'happy client', number:123},
                              {name:'award winner', number:15},
                              {name:'cup of coffee', number:99},
                              {name:'members', number:24}]

    return (
        <div className="container-item">
            <div className="statistics">
                { statisticElement.map((selement, index) => 
                    <div className="statistics-item" key={index}>
                        <div className="statistics-count">{selement.number}</div>
                        <div className="statistics-text">{selement.name}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StatistickItem;