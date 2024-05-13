
const History = (props) => {
    const {info} = props;

    return (
        <>
            <h1>{info.title}</h1>
            <p>{info.intro}</p>
        </>
  
    )
};

export default History;