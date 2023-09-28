import { Link, Route ,Routes} from 'react-router-dom';
import logo from "../image/RM_symbol.png";



export default function Customer()
{
    return(
    <div>
        <nav className="navbar navbar-expand-sm b ">
            <div className="container-fluid">
                
    <img src={logo} class="Logo" width="210" height="180" />
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="viewOperators" className="nav-link px-3">rushi_more009</Link>
            </li>
            <li className="nav-item">
            <Link to="viewCustomers" className="nav-link px-3">Rent Product </Link>
            
            
            </li>
            <li className="nav-item">
            <Link to="viewProducts" className="nav-link px-3">Buy Products</Link>
            </li>
            <li className="nav-item">
            <Link to="logout" className="nav-link px-3">Logout</Link>
            </li> 
            </ul>

            </div>

        </nav>


        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>

                <div class="card" >
  <img src="https://media.wired.com/photos/59264baf7034dc5f91beaf03/master/w_2560%2Cc_limit/DroneTA_GettyImages-599365398.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">wedding Drone</h5>
    <p class="card-text">Take your photos and videos to new heights by having a drone at your wedding.</p>
    <a href="#" class="btn btn-primary">read more..</a>
  </div>
</div>

                </div>


                <div className='col-md-3'>

                <div class="card" >
  <img src="https://c.files.bbci.co.uk/12636/production/_125981357_djimavic3drone.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Road Mapping.</h5>
    <p class="card-text">Using drones to survey a motorway without stopping traffic</p>
    <a href="#" class="btn btn-primary">read more..</a>
  </div>
</div>

                </div>

                
                <div className='col-md-3'>

                <div class="card" >
  <img src="http://sc04.alicdn.com/kf/He2b1b155ed8a438f85f64e1944ebbfccp.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Agriculture Drone</h5>
    <p class="card-text">AgricultureApplicable Industries:Farms, Retail, Agriculture, agriculture spraying drone</p>
    <a href="#" class="btn btn-primary">read more..</a>
  </div>
</div>

                </div>
                <div className='col-md-3'>

                <div class="card" >
  <img src="http://sc04.alicdn.com/kf/H5391fcfd5c504c49ba1cbd15000719bcB.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Buy </h5>
    <p class="card-text">Drones take things to the next level. The largest, strongest,  
    </p>
    <a href="#" class="btn btn-primary">read more..</a>
  </div>
</div>

                </div>


            </div>
            <br/>
          
</div>
    </div>
    )
}