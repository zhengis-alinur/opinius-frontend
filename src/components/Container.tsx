const Container = (
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => {
    return (
        <div
            className={`w-full max-w-5xl bg-white rounded-xl shadow-xl px-5 py-8 ${props.className} md:px-8`}
        >
            {props.children}
        </div>
    );
};

export default Container;
