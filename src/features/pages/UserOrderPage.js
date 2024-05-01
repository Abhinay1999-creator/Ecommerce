import UserOrders from "../user/components/UserOrders";
import NavBar from "../navbar/Navbar";

function UserOrderPage() {
    return (<div>
        <NavBar>
        <h1 className="mx-auto text-2xl">My Orders</h1>
            <UserOrders></UserOrders>
        </NavBar>
    </div>);
}

export default UserOrderPage;