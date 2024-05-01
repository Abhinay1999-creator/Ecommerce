
import NavBar from '../navbar/Navbar';
import { ProductList } from '../productlist/ProductList';

function Home() {
    return (
        <>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </>
    );
}

export default Home;