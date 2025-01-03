export const BasicTypes = () => {

    const name  : String = "Ivan";
    const age : number = 20;
    const isActive : boolean = true;
    const powers : string[] = ['React','Vue','Angular'];

    return (
        <>
        <h3>Tipos Basicos</h3>

        {name} {age} {isActive ? 'true':'false'}

        <br/>

        {powers.join(', ')}
        </>
    )
}