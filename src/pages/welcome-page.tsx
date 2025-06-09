import { Button } from "@/components/ui/button"
import { useBoardAtom } from "@/utils/use-board-atom"
import { useNavigate } from "react-router"

export function WelcomePage() {

    const navigate = useNavigate()
    const { resetBoard, boardValues } = useBoardAtom()

    const handleStart = () => {
        navigate('game')
    }

    const handleReset = () => {
        resetBoard()
        handleStart()
    }

    return <div className="flex flex-col gap-6 w-full mt-5">
        Herzlich willkommen zum digitalen Knister Block
        <div className="flex flex-col items-center gap-6">
            <Button onClick={handleStart} disabled={Object.entries(boardValues()).length === 0}>Spiel fortsetzen</Button>
            <Button onClick={handleReset}>Spiel neu starten</Button>
        </div>
    </div >
}