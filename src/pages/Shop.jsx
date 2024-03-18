import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"
import Newcollections from "../Components/NewCollections/Newcollections"
import Newsletter from "../Components/Newsletter/Newsletter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"

const Shop = () => {
    return (
        <>
            <Hero />
            <Popular />
            <Offers />
            <Newcollections />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Shop