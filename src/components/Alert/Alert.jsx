import PropTypes from 'prop-types'

import { AlertStyled } from './Alert.styled'


export const Alert = ({text, type})=>{
    return <AlertStyled type={type}>{text}</AlertStyled>
}

Alert.propTypes = {
    text : PropTypes.string,
    ttpe : PropTypes.string,
}