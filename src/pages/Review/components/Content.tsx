import HTMLReactParser from 'html-react-parser';
const Content = ({ text }: { text: string }) => {
    return <div className="self-start">{HTMLReactParser(text)}</div>;
};

export default Content;
