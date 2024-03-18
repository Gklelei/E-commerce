import './Newcollections.css'
import new_collections from '../assets/new_collections'
import Item from '../Item/Item'
const Newcollections = () => {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((collection, i) => {
                    return <Item key={i} id={collection.id} name={collection.name} image={collection.image} new_price={collection.new_price} old_price={collection.old_price} />
                })}
            </div>
        </div>
    )
}

export default Newcollections