import "./styles/index.scss"
import { Link, Route, Routes } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"


function App() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
