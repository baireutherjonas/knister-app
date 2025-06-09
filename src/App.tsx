
import './App.css'
import { BoardPage } from './pages/board-page.tsx'
import { DiceSidepanel } from './view/dice-sidepanel.tsx'
import { useGetTotalPoints } from './utils/use-get-points.ts'
import PWABadge from './PWABadge.tsx'
import { Sidesheet } from './view/sidesheet.tsx'

function App() {
  const { getGameSum } = useGetTotalPoints()

  return <><div className='flex flex-row w-full h-full justify-between'>
    <Sidesheet />
    <BoardPage />
    {!getGameSum() && <DiceSidepanel />}
  </div>
    <PWABadge />
  </>
}

export default App
