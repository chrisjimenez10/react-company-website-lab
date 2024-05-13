
const Links = (props) => {
    const {info} = props;
     return (
        <h1><a href={info.url} target="_blank" >{info.title}</a></h1>
     )
};

export default Links;