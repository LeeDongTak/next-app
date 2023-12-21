const { useRouter } = require("next/router")

const ClientPersonPortfolio = () => {
    const { query } = useRouter();
    const { id, clientId } = query;
    console.log(query)
    return (
        <>
            <h1>{id}{clientId}</h1>
        </>
    )
};

export default ClientPersonPortfolio