import {Navbar, NavbarBrand} from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} alt='nucamp logo' />
                    </NavbarBrand>
            </Navbar>
    )
}

export default Header;


//can yall see this????

//my power just cut out so im using my hotspot on my phone. 

