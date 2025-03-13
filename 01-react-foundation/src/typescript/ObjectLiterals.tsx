interface Person {
    firstName: string,
    lastName: string,
    age: number,
    address: Address,
    isAlive?: boolean
}

interface Address {
    country: string,
    houseNo: number,
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: "Bryan",
        lastName: "Edward",
        age: 17,
        isAlive: undefined,
        address: {
            country: "España",
            houseNo: 28026
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                { JSON.stringify( person, null , 2 ) }
            </pre>
        </>
    )
}
