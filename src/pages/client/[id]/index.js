const { useRouter } = require("next/router")

const ClientPerson = () => {
    const { query } = useRouter();
    const { id } = query;
    return (
        <>
            <h1>{id} ClientPerson</h1>
        </>
    )
}

export default ClientPerson;