import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone, website} = user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h4>email: {email}</h4>
            <p>Website: {website}</p>
            <p>Phone Number: {phone}</p>
        </div>
    );
};

export default UserDetails;