
const Error404page = () => {
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '50px',
        fontWeigth: '800',
    }
    return (
        <div className="errorMessage" style={styles}>
            Error 404 page not found
        </div>
    )
}

export default Error404page