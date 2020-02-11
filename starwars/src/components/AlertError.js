import React from 'react'
import { Alert } from 'reactstrap'

function AlertError(props) {
    const {message} = props.apiError

    return <Alert color="danger">{message}</Alert>
}

export default AlertError 