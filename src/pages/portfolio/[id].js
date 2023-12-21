import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
    const { query } = useRouter();
    const { id } = query;
    console.log(id)
    return(
        <>
            <h1>{id} PortfolioProjectPage</h1>
        </>
    )
}

export default PortfolioProjectPage;