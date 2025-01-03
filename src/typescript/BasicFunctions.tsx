export const BasicFuncions = () => {

    const addTwoNumbers = (a:number,b:number) =>{
        return a + b
    }

    return(
        <>
            <h3>Funciones</h3>

            <span>El resultado de sumar : {addTwoNumbers(4,5)}</span>
        </>
    )
}