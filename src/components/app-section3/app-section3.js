import imgWeDo from '../../img/wedo.jpg';
import servImgP from '../../img/services-img/photography.png';
import servImgC from '../../img/services-img/creativity.png';
import servImgW from '../../img/services-img/webdesign.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import './app-section3.css'

const AppSection3 = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <h3 className="section-suptitle">Service</h3>
                    <h2 className="section-title">what we do</h2>
                <div className="section-text">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo necessitatibus mollitia suscipit voluptas non placeat blanditiis officiis quod. Delectus id veritatis rerum vel laudantium aspernatur aut velit maxime? Dolor, quidem.
                    </p>
                </div>
                </div>
                <div className="whatwedo">
                    <div className="whatwedo-item left">
                        <img className="whatwedo-item-img" src={imgWeDo} alt=""/>
                    </div>
        
                <div className="whatwedo-item right">
                    <div className="accordion">
                    <div className="accordion-item">
                        <input className="accordion-item-input" type="radio" name="accordion" id="accordion-1" defaultChecked/>
                        <label className="accordion-item-header" htmlFor="accordion-1">
        
                        <div className="accordion-header-title">
                            <img src={servImgP} alt="" className="accordion-header-icon"/>
                            <span>photography</span>
                        </div>
                        <i aria-hidden="true"><FontAwesomeIcon className='i' icon={faAngleUp}/></i>
        
                        </label>
        
                        <div className="accordion-item-content checkedd">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas, praesentium natus similique voluptas quibusdam quasi nulla, mollitia? Deleniti excepturi porro alias laudantium laborum vel et dicta maxime, consequuntur fugit ea cupiditate officiis facilis non voluptatibus quidem recusandae quibusdam! Expedita numquam consectetur earum est quidem, accusamus repellendus molestiae magni, laborum quas nostrum nemo cum provident quasi natus quod voluptates aspernatur alias doloremque, minima ratione voluptatibus quibusdam eos. Eum quae eveniet exercitationem vero quibusdam tenetur sequi quam nostrum quisquam illo magnam tempora facilis molestias perspiciatis error iusto, cupiditate amet facere repudiandae sed inventore voluptatibus qui saepe delectus. Ipsum delectus ut facere!</p>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <input className="accordion-item-input" type="radio" name="accordion" id="accordion-2"/>
                        <label className="accordion-item-header" htmlFor="accordion-2">
                        
                        <div className="accordion-header-title">
                            <img src={servImgC} alt="" className="accordion-header-icon"/>
                            <span>creativity</span>
                        </div>
                        <i aria-hidden="true"><FontAwesomeIcon className='i' icon={faAngleUp}/></i>
        
                        </label>
        
                        <div className="accordion-item-content checkedd">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa mollitia doloribus magnam fuga rerum impedit ex, provident molestias velit asperiores neque quis atque aperiam tempore illum distinctio debitis perspiciatis nisi itaque cum, rem. Saepe qui velit dolore beatae necessitatibus tempora accusantium repudiandae dolorum accusamus ipsum! Facilis repellendus, quod vitae necessitatibus consequatur recusandae voluptas adipisci corporis placeat. Excepturi dolore hic architecto placeat quaerat? Ipsum accusamus sit aut tempora quos totam beatae, architecto sint consectetur fugiat deleniti! Possimus ipsam quas voluptate. Cupiditate, explicabo temporibus assumenda et ad placeat inventore, quis minus eum expedita optio necessitatibus nemo nostrum error ut voluptatem earum ex sequi sunt nulla consequuntur voluptatibus dolorem vero nobis repellat. Quibusdam corrupti, incidunt harum odio expedita, assumenda voluptate aliquam magnam autem commodi. Quos id neque similique harum commodi odit quo placeat pariatur, non! Ad vel cumque enim at et, facilis sunt iste error mollitia beatae, possimus unde quia animi provident delectus.</p>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <input className="accordion-item-input" type="radio" name="accordion" id="accordion-3"/>
                        <label className="accordion-item-header" htmlFor="accordion-3">
                        
                        <div className="accordion-header-title">
                            <img src={servImgW} alt="" className="accordion-header-icon"/>
                            <span>web design</span>
                        </div>
                        <i aria-hidden="true"><FontAwesomeIcon className='i' icon={faAngleUp}/></i>
        
                        </label>
        
                        <div className="accordion-item-content checkedd">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo soluta atque suscipit assumenda officia minus, iure saepe quam numquam ducimus eveniet nobis blanditiis consequuntur vero sed autem consequatur maiores esse culpa totam laborum, nulla reiciendis vel? Dicta provident doloribus quidem consequuntur vitae inventore minima similique nulla qui consequatur fuga veritatis maiores, amet labore, possimus nostrum impedit voluptate illum quo officia repellat esse. Aspernatur laudantium libero quo ab, incidunt velit consectetur id officiis maxime accusamus. Provident hic sapiente incidunt nulla. Suscipit porro pariatur dolores officia laudantium error fugit quaerat exercitationem reprehenderit asperiores id vel itaque consequuntur repellendus perspiciatis dolore quibusdam quisquam rem, tenetur nesciunt iusto officiis veniam voluptatum dicta optio? Magnam accusamus ullam deserunt molestiae similique. Molestiae quidem distinctio, quos officia maiores impedit. Asperiores odio mollitia vel sequi temporibus nostrum repudiandae sunt molestiae quae ducimus ex cum, cupiditate voluptate quod dolores, earum, placeat rem impedit perspiciatis iusto qui. Consequatur minima deleniti voluptatibus architecto, nisi laborum rerum eligendi animi, sequi quod sunt nemo, distinctio aliquid, sint voluptatum accusantium sapiente repudiandae nobis? Autem rem possimus, optio quia modi ullam perferendis officiis at vitae facilis quis doloremque est ea, natus nemo consequuntur perspiciatis quisquam corporis sed veritatis numquam, cupiditate hic? Alias, nobis, exercitationem. </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AppSection3;