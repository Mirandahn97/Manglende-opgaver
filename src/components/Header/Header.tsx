import style from './Header.module.scss'

interface HeaderProps {
    headerText: string;
}

export const Header = ({ headerText }: HeaderProps) => {
    return (
        <header className={style.dynamiskHeader}>
            <h1>{headerText}</h1>
        </header>
    )
}