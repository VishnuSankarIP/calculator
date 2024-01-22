// display content

const displayContent=(content)=>{
    result.value+=content
}
const clearScreen=()=>{
    result.value=""
    
}
const finalOutput=()=>{
    try{result.value=eval(result.value)
    }
    catch{
        result.value="Error"
       
    }
}
const backSpace=()=>{
    result.value=result.value.slice(0,-1)
}