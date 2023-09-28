import CustomNavbar from "./CustomNavbar";
import NavbarBottom from "./NavbarBottom";

const Base=({ title="Welcome to our webside",children })=>{
    return(
        <div className="container-fluid p-0 m-0 ">
            
            <CustomNavbar />
            
            <h1 className="text-center " ><i class="zmdi zmdi-instagram"></i> civil_arc_</h1>
            
            { children }

           
            <NavbarBottom />
            </div>
    );
};

export default Base