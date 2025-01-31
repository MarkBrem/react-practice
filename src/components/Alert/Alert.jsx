import PropTypes from 'prop-types'
import s from './Alert.module.css'

export const Alert = ({text, type})=>{
    return <p className={s[type]}>{text}</p>
}

Alert.propTypes = {
    text : PropTypes.string,
    ttpe : PropTypes.string,
}