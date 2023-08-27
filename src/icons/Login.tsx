import { Link } from 'react-router-dom';

import { PRIMARY } from '../constants/colors';

const Login = () => {
    return (
        <Link to="/login">
            <svg
                className="relative"
                data-tooltip-target="tooltip-login"
                data-tooltip-placement="left"
                width="25"
                height="22"
                viewBox="0 0 104 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M39.5331 0.741455V13.5942H90.944V77.8579H39.5331V90.7106H103.797V0.741455H39.5331ZM52.3858 26.4469V39.2997H0.974854V52.1524H52.3858V65.0051L78.0913 45.726L52.3858 26.4469Z"
                    fill={PRIMARY}
                />
            </svg>
        </Link>
    );
};

export default Login;
