import { switchOnOff } from "../features/powerSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function PowerButton() {
    const dispatch = useDispatch();

    const handlePowerClick = (e) => {
        if(e.type == 'click' || (e.type == 'keydown' && e.key == 'Escape')) {
            dispatch(switchOnOff());
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handlePowerClick);

        return () => {
            document.removeEventListener('keydown', handlePowerClick);
        }
    })

    return (
        <div className="power-button" onClick={handlePowerClick} tabIndex={-1}>
            <i className="fa-solid fa-power-off" />
        </div>
    )
}

export default PowerButton