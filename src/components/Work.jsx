
const Work = (props) => {
    const {info} = props;

    return (
        <>
            <img src={info.projectImg} alt="project-img" />
            <h1>{info.projectName}</h1>
            <p>{info.projectDesc}</p>
        </>
        
    )
};

export default Work;