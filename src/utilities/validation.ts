export const validateText = (elementName: string, value: string, minLength:number = 2) => {
    if (value.length == 0)
        return `${elementName} is requierd`
    else if (value.length < minLength)
        return `${elementName} must contain atleast ${minLength} characters`
    else
        return ''
}

export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length == 0)
        return `${elementName} is requierd`
    else if (!regEx.test(value))
        return `${elementName} must be a valid e-mail adress`
    else
        return ''
}