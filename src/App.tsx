import PWABadge from './PWABadge.tsx'
import './App.css'
import { BoardPage } from './pages/board-page.tsx'
import { RulesView } from './view/rules-view.tsx'
import { DiceSidepanel } from './view/dice-sidepanel.tsx'
import { TotalPoints } from './view/total-points.tsx'
import { MainLayout } from './view/main-layout.tsx'

function App() {
  return (
    <MainLayout leftContent={
      <>
        <RulesView />
        <TotalPoints />
      </>
    }>
      <div className='flex flex-row mx-4 w-full justify-around'>
        <BoardPage />
        <DiceSidepanel />
      </div>
    </MainLayout>
  )
}

export default App
