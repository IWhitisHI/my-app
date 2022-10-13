import clientImg1 from '../../img/clients/1.png';
import clientImg2 from '../../img/clients/2.png';
import clientImg3 from '../../img/clients/3.png';
import clientImg4 from '../../img/clients/4.png';


import './app-section6.css'

const AppSection6 = () => {
    const clientsElement = [{
                                img:clientImg1,
                                name:'Matthew Dix'  
                            },
                            {
                                img:clientImg2,
                                name:'Nick Karvounis'  
                            },
                            {
                                img:clientImg3,
                                name:'Jaelynn Castillo'  
                            },
                            {
                                img:clientImg4,
                                name:'Mike Petrucci'  
                            },]
    return (

        <section className="section section-6">
            <div className="container">
                
                <div className="section-header">
                <h3 className="section-suptitle">Happy Clients</h3>
                <h2 className="section-title">what people say</h2>
                </div>
        
                <div className="clients">
                    {
                        clientsElement.map((element, index) =>
                        <div className="clients-item" key={index}>
                            <div className="clients-item-left">
                                <img src={element.img} alt=""/>
                            </div>
                            <div className="clients-item-right">
                            <div className="clients-item-right--title">{element.name}</div>
                            <div className="clients-item-right--profession">Graphic Design</div>
                                <hr/>
                                <p className="clients-item-right--text">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Numquam dolorem animi provident neque excepturi reiciendis perspiciatis asperiores, nobis ipsum cupiditate, tempora est.</p>
                            </div>
                        </div> 
                    )}
                </div>
        
            </div>
        </section>

    );
}

export default AppSection6;