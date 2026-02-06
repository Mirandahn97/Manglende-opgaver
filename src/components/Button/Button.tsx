import style from './Button.module.scss'

interface ButtonProps {
    action: () => void;
    size: 'small' | 'medium' | 'large'
    theme: 'light' | 'dark'
    text: string
}

export const Button = ({ action, size, theme, text }: ButtonProps) => {
    return (
        <>
            <button
                className={`${style.btn} ${style[size]} ${style[theme]}`}
                onClick={action}>
                {text}
            </button>
        </>
    )
}