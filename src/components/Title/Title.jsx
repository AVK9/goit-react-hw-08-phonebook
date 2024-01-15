import css from './Title.module.css'

export const Title = ({ text }) => (
    <div>
        <h2 className={css.titleh2}>{text}</h2>

    </div>
    )