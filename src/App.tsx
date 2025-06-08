
import './App.css'
import { BoardPage } from './pages/board-page.tsx'
import { RulesView } from './view/rules-view.tsx'
import { DiceSidepanel } from './view/dice-sidepanel.tsx'
import { TotalPoints } from './view/total-points.tsx'
import { TitleView } from './view/title-view.tsx'
import { useState } from 'react'
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './components/ui/button.tsx'
import { useGetTotalPoints } from './utils/use-get-points.ts'

function App() {
  const [open, setOpen] = useState<boolean>(true)
  const toggleSideSheet = () => setOpen(!open)
  const { getGameSum } = useGetTotalPoints()

  return <div className='flex flex-row w-full'>
    {open || getGameSum() ?
      <div className='flex flex-col gap-2 w-50 min-w-[150px]'>
        <div className='flex flex-row gap-2'>
          {!getGameSum() && <Button size={'sm'} onClick={toggleSideSheet}><FontAwesomeIcon icon={faChevronLeft} /></Button>}

          <TitleView />
        </div>
        <RulesView />
        <TotalPoints />
      </div>
      :
      <Button size={'sm'} onClick={toggleSideSheet}><FontAwesomeIcon icon={faBars} /></Button>
    }
    <div className="flex flex-row w-full justify-between mx-4 ">
      <BoardPage />
      {!getGameSum() && <DiceSidepanel />}
    </div>
  </div>
}

export default App
