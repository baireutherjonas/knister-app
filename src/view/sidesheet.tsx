import { Button } from "@/components/ui/button";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { RulesView } from "./rules-view";
import { TitleView } from "./title-view";
import { TotalPoints } from "./total-points";
import { useGetTotalPoints } from "@/utils/use-get-points";

type ToggleButtonProps = {
    open: boolean;
    toggle: () => void
}
function ToggleButton({ open, toggle }: ToggleButtonProps) {
    return <Button data-testid="toggle-button" variant={'outline'} size={'sm'} onClick={toggle}><FontAwesomeIcon icon={open ? faChevronLeft : faBars} /></Button>
}

export function Sidesheet() {
    const [open, setOpen] = useState<boolean>(true)
    const toggleSideSheet = () => setOpen(!open)
    const { getGameSum } = useGetTotalPoints()

    return open ? (
        <div className='flex flex-col gap-2 w-50 min-w-[150px] justify-between'>
            <TitleView />
            <div className='flex flex-col gap-2'>
                <RulesView />
                <TotalPoints />
            </div>
            <div className="flex flex-ro">
                {!getGameSum() && <ToggleButton open={open} toggle={toggleSideSheet} />}
            </div>
        </div>
    ) : (
        <div className="flex flex-col justify-end">
            <ToggleButton open={open} toggle={toggleSideSheet} />
        </div>
    )
}