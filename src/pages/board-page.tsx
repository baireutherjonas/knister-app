import { ClickField } from "@/components/click-field"
import { SummaryField } from "@/components/summary-field"

export function BoardPage() {

    return <div className="flex flex-row">

        <SummaryField index={11} />

        <div className="flex flex-col">
            <div className="flex flex-row">
                {[...Array(6)].map((_x, x) =>
                    <SummaryField index={x} />
                )}
            </div>

            {[...Array(5)].map((_v, row) =>
                <div className="flex flex-row">
                    {[...Array(5)].map((_v, col) =>
                        <ClickField row={row} col={col} />
                    )}
                    <SummaryField index={row + 6} />
                </div>
            )}
        </div>
    </div>
}