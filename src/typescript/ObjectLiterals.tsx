interface Person {
    fullName: string;
    age : Number;
    isAlive?: boolean;
    address : {
        country: string;
        houseNo:number;
    }
}



export const ObjectLiterals = () => {

    const person: Person = {
        fullName : "Ivan Poma",
        age: 20,
        isAlive : undefined,
        address:{
            country : 'Canada',
            houseNo : 7
        }
    }
    return(
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(person,null,2)}
            </pre>
        </>
    )
}