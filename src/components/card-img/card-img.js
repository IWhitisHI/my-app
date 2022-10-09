import about1Img from '../../img/About/1.jpg'

import "./card-img.css"

const CardImg = () => {
    return (
        <div className='card-i'>
            <div className="card__item">
                <div className="card__inner">
                    <div className="card__image">
                        <img src={about1Img} alt=""/>
                        {/* <div className="card__text">
                            <br/>
                            super team
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="card__item">
                <div className="card__inner">
                    <div className="card__image">
                        <img src={about1Img} alt=""/>
                        {/* <div className="card__text">
                            <br/>
                            super team
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="card__item">
                <div className="card__inner">
                    <div className="card__image">
                        <img src={about1Img} alt=""/>
                        {/* <div className="card__text">
                            <br/>
                            super team
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardImg;