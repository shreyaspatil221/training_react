import { useAuth } from '../../auth';
import Greeting from '../common/Greeting';
import Name from '../common/Name';

export const App = () => {
    const auth = useAuth();
    console.log("AUTH", auth)

    const handleLogout = () => {
        console.log("handleLogout", auth)
        auth.logout();
    }

    if (!auth.user) return (<div className="container mt-5">You do not have access to this page</div>);

    return (
        <div className="container mt-5">
            <Name name={auth?.user} />
            <Greeting />
            <button type="button" onClick={handleLogout} className="btn btn-primary m-2">
                Logout
            </button>
        </div>
    );
}

export default App;
