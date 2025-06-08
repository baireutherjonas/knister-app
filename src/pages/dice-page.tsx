import { Button } from "@/components/ui/button";
import { useBoardAtom } from "@/utils/use-board-atom";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

const values: number[][] = [[2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12]]

export function DicePage() {
    const [params] = useSearchParams()
    const col = params.get('col')
    const row = params.get('row')
    const { setBoardValue } = useBoardAtom()
    const navigate = useNavigate()
    const handleClose = () => {
        navigate(-1)
    }

    const handleSelectValue = (value: number) => {
        setBoardValue(Number(row), Number(col), value);
        handleClose()
    }

    useEffect(() => {
        if (!col || !row) {
            navigate('/game')
        }
    }, [col, row])


    return <div className="flex flex-col gap-4 items-center">
        <div>Was wurde gerade gewürfelt?</div>
        <div>Welchen Wert willst du in das Feld eintragen:</div>
        <div className="flex flex-col gap-2">
            {values.map(row =>
                <div className="flex flex-row gap-2 justify-center">
                    {row.map(value => <Button onClick={() => handleSelectValue(value)}>{value}</Button>)}
                </div>
            )}
        </div>
        <Button onClick={handleClose}>Abbrechen</Button>
    </div>
}
