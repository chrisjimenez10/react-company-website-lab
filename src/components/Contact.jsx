
const Contact = (props) => {
    const {info} = props;

    return (
        <>
            <p>{info.message}</p>
            <p>{info.address.slice(0, 17)} <br />{info.address.slice(17, 56)} <br/>{info.address.slice(58)}</p>
            <p>{info.phone}</p>
            <p>{info.email}</p>
        </>
    )
};

export default Contact;