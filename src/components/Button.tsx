import { ReactNode } from 'react';
const Button = ({
    children,

    ...props
}: {
    children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            onClick={props.onClick}
            data-modal-target="modal"
            data-modal-toggle="modal"
            type={props.type || 'button'}
            className={`relative flex items-center justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ${props.className}`}
        >
            {children}
        </button>
    );
};

export default Button;
