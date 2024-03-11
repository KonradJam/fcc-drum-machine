import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { volumeChange } from "../features/volumeSlice";
import { changeTitle } from "../features/screenSlice";
import { useEffect } from "react";

function VolumeControl() {
    const volume = useSelector(state => state.volume);
    const dispatch = useDispatch();

    const handleVolumeChange = (e) => {
        if(e.type == 'change' || (e.type == 'keydown' && (e.key == '-' || e.key == '+'))) {
            let value = e.target.value || document.querySelector('.volume-slider-container > input').value;

            if(e.key == '+' && e.shiftKey) {
                value = Number(value) + 5;
            } else if (e.key == '-' && e.shiftKey) {
                value = Number(value) - 5;
            } else if(e.key == '+') {
                value = Number(value) + 1;
            } else if (e.key == '-') {
                value = Number(value) - 1;
            }

            dispatch(volumeChange(value));
            dispatch(changeTitle(`Volume: ${value}%`));
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleVolumeChange);

        return () => {
            document.removeEventListener('keydown', handleVolumeChange);
        }
    })

    return (
        <div className="volume-control">
            <i className="fa-solid fa-volume-off" />
            <div className="volume-slider-container">
            <input
                type="range"
                min={1}
                max={100}
                value={volume.value}
                className="volume-slider"
                onChange={handleVolumeChange}
                tabIndex={-1}
            />
            </div>
            <i className="fa-solid fa-volume-high" />
        </div>
    )
}

export default VolumeControl