import '../../style/Body.css'
import EyeButton from './EyeButton/EyeButton'
import SearchPanel from './SearchPanel/SearchPanel'
import NotifyBell from './NotifyBell/NotifyBell'
import PersonProfile from './PersoneProfile/PersonProfile'
import StartPage from './content/StartPage'
import ShedulePage from '../Shedule/Shedule'
import Grade from '../Grade/Grade'
import StudentsPay from '../StudentsPay/StudentsPay'
import Support from '../Support/Support'
import PersonalAccount from '../PersonalAccount/PersonalAccount'


// Контейнер body
const BodyMainContainer = (props) => {
    return (
        <div className="main-container">
            <div className='body-content'>
                {props.children}
            </div>
        </div>
    )
}

// Меню в body (верхняя часть страницы с поиском и тд)
const BodyHeaderMenu = () => {
    const BodyHeaderMenuStyle = {
        marginBottom: 20
    }

    return (
        <div style={BodyHeaderMenuStyle} className='body-content__header'>
            <EyeButton />
            <SearchPanel />
            <NotifyBell />
            <PersonProfile />
        </div>
    )
}

//оболочка страницы
const BodyContent = (props) => {
    return (
        <div className='body-content__body'>
            {props.children}
        </div>
    )
}

//главная страница
const BodyMain = () => {
    return (
        <BodyMainContainer>
            <BodyHeaderMenu />
            <BodyContent>
                <StartPage>
                    <ShedulePage />
                </StartPage>
            </BodyContent>
        </BodyMainContainer>
    )
}
//страница с рассписанием 
const BodyShedule = () => {
    return (
        <BodyMainContainer>
            <BodyHeaderMenu />
            <BodyContent>
                <StartPage>
                    <ShedulePage />
                </StartPage>
            </BodyContent>
        </BodyMainContainer>
    )
}

//страница с успеваюмостью (скрыта, если не войти)
const BodyGrade = () => {
    return (
        <BodyMainContainer>
            <BodyHeaderMenu />
            <BodyContent>
                <StartPage>
                    <Grade />
                </StartPage>

            </BodyContent>
        </BodyMainContainer>
    )
}

//страница с успеваюмостью (скрыта, если не войти)
const BodyPersonalAccount = () => {
    return (
        <BodyMainContainer>
            <BodyHeaderMenu />
            <BodyContent>
                <StartPage>
                    <PersonalAccount />
                </StartPage>

            </BodyContent>
        </BodyMainContainer>
    )
}

//страница с учебным планом (скрыта, если не войти)
const PagePay = () => {
    return (
        <BodyMainContainer>
            <BodyHeaderMenu />
            <BodyContent>
                    <StudentsPay />
            </BodyContent>
        </BodyMainContainer>
    )
}

//страница для связи с поддержкой 
const BodySupport = () => {
    return (
        <BodyMainContainer>
            <BodyHeaderMenu />
            <BodyContent>
                    <Support />
            </BodyContent>
        </BodyMainContainer>
    )
}



export { BodyMain, BodyShedule, BodyGrade, BodyPersonalAccount, PagePay, BodySupport }