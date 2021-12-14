
const FairyLights = ({ flashing, number, treeLevel }) => {

    const fairyLightArray = [...Array(number)]
    return (
        <div className={`fairy-lights fairy-lights-${treeLevel}`}>
            {fairyLightArray.map(i => <div className={`${flashing ? 'bulb bulb-animate' : 'bulb'}`} key={i}></div>)}
        </div>
    )
}

export default FairyLights;