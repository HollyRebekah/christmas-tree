
const Bauble = ({ colour }) => {
    return (
        <div className={`bauble bauble-${colour}`}>
            <div className='bauble-stripe'></div>
        </div>
    )
}

export default Bauble;