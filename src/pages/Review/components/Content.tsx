import HTMLReactParser from 'html-react-parser';
const Content = ({ text }: { text: string }) => {
    return <div className="self-start w-full">{HTMLReactParser(text)}</div>;
};

export default Content;
