

const Home = (props) => {
    const {info} = props;
    console.log(info.title);

    return (
        <>
            <h1>{info.title}</h1>
            <p>{info.intro}</p>
            
        </>
    )
};

export default Home;