
export const BasicFunctions = () => {

    const addTwoNumber = (a: number, b: number) => {
        return a + b
    }

    return (
        <>
            <h3>Functiones</h3>
            <span>EL resultado de sumar: { addTwoNumber(2,8) } </span>
        </>
    )
}
