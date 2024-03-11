import { useSelector } from "react-redux"

function Screen() {
    const power = useSelector(state => state.power)
    const screen = useSelector(state => state.screen)

    return (
        <div className="screen-frame">
            <div className={`screen ${power.on && "screen-on"}`}>
                <div className="screen-text">{power.on && screen.title}</div>
            </div>
        </div>
    )
}

export default Screen