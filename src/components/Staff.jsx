
const Staff = (props) => {
    const {info} = props;

    return (
        <>
            <h1>{info.name}</h1>
            <h3><em>{info.position}</em></h3>
            <p>{info.desc}</p>
        </>
    )
};

export default Staff;