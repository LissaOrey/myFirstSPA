export  const required =(value)=>{
    if(value) return undefined
    return "Field is required"
}

export const maxLengthCreator =(maxLength)=>(value)=>{
    if(value && value.length > maxLength) return `no more than  ${maxLength}  symbols`;
    return undefined;
}

export const minLengthCreator =(minLength)=>(value)=>{
    if(value.length < minLength) return `must be at least ${minLength} symbols long`;
    return undefined;
}

