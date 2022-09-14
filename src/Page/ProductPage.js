import {useParams} from 'react-router-dom'
function ProductPage(){
    const params = useParams();
    console.log(params);
        return(
            <div>
                <h1>ProductPage</h1>
                <h2>Product name</h2>
                <h3>{params.productId}</h3>
            </div>
        )
    }
export default ProductPage;