
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons'

export const Dice = ({ value }: { value: number }) => {
    switch (value) {
        case 1:
            return <FontAwesomeIcon size="3x" icon={faDiceOne} />
        case 2:
            return <FontAwesomeIcon size="3x" icon={faDiceTwo} />
        case 3:
            return <FontAwesomeIcon size="3x" icon={faDiceThree} />
        case 4:
            return <FontAwesomeIcon size="3x" icon={faDiceFour} />
        case 5:
            return <FontAwesomeIcon size="3x" icon={faDiceFive} />
        case 6:
            return <FontAwesomeIcon size="3x" icon={faDiceSix} />
        default:
            return null;
    }
}