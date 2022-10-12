import clientImg1 from '../../img/clients/1.png';
import clientImg2 from '../../img/clients/2.png';
import clientImg3 from '../../img/clients/3.png';
import clientImg4 from '../../img/clients/4.png';


import './app-section6.css'

const AppSection6 = () => {
    return (

        <section className="section section-6">
            <div className="container">
                
                <div className="section-header">
                <h3 className="section-suptitle">Happy Clients</h3>
                <h2 className="section-title">what people say</h2>
                </div>
        
                <div className="clients">
                <div className="clients-item">
                    <div className="clients-item-left">
                        <img src={clientImg1} alt=""/>
                    </div>
                    <div className="clients-item-right">
                    <div className="clients-item-right--title">Matthew Dix</div>
                    <div className="clients-item-right--profession">Graphic Design</div>
                        <hr/>
                        <p className="clients-item-right--text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Numquam dolorem animi provident neque excepturi reiciendis perspiciatis asperiores, nobis ipsum cupiditate, tempora est.</p>
                    </div>
                </div>
                <div className="clients-item">
                    <div className="clients-item-left">
                        <img src={clientImg2} alt=""/>
                    </div>
                    <div className="clients-item-right">
                    <div className="clients-item-right--title">Nick Karvounis</div>
                    <div className="clients-item-right--profession">Graphic Design</div>
                        <hr/>
                        <p className="clients-item-right--text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Numquam dolorem animi provident neque excepturi reiciendis perspiciatis asperiores, nobis ipsum cupiditate, tempora est.</p>
                    </div>
                </div>
                <div className="clients-item">
                    <div className="clients-item-left">
                        <img src={clientImg3} alt=""/>
                    </div>
                    <div className="clients-item-right">
                    <div className="clients-item-right--title">Jaelynn Castillo</div>
                    <div className="clients-item-right--profession">Graphic Design</div>
                        <hr/>
                        <p className="clients-item-right--text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Numquam dolorem animi provident neque excepturi reiciendis perspiciatis asperiores, nobis ipsum cupiditate, tempora est.</p>
                    </div>
                </div>
                <div className="clients-item">
                    <div className="clients-item-left">
                        <img src={clientImg4} alt=""/>
                    </div>
                    <div className="clients-item-right">
                    <div className="clients-item-right--title">Mike Petrucci</div>
                    <div className="clients-item-right--profession">Graphic Design</div>
                        <hr/>
                        <p className="clients-item-right--text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Numquam dolorem animi provident neque excepturi reiciendis perspiciatis asperiores, nobis ipsum cupiditate, tempora est.</p>
                    </div>
                </div>
                </div>
        
            </div>
        </section>

    );
}

export default AppSection6;