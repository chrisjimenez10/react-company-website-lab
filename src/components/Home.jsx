

const Home = ({info}) => {
    // const {info} = props;
    // console.log(info.title);
    const {title, intro} = info;

    return (
        <>
            <h1>{title}</h1>
            <p>{intro}</p>
            
        </>
    )
};

export default Home;