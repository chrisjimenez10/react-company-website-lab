
const Home = (props) => {
    const {info} = props;
    console.log(info.title);

    return (
        <>
        <h1>{info.title}</h1>
        <h2>{info.intro}</h2>
        </>
    )
};

export default Home;