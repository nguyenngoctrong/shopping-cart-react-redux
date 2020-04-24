import React,{useEffect,useState,useMemo,useRef,useCallback} from 'react';
import { useSelector,useDispatch } from "react-redux";
import ProductSize from "../../component/product/ProductSize";
import ProductItem from "../../component/product/ProductItem";
import ProductSort from "../../component/product/ProductSort";
import { fetchProduct, changeStatus, sortProduct, fetchCartWithId } from "../../redux";
import './product.scss'

const Product = () => {
    console.log("Product")
    const loader = useRef(null);
    const dispatch =useDispatch()
    const products =useSelector( state => state.products )
    const size =useSelector( state => state.size )
    const [sort,setSort] = useState('1');



    useEffect(() => {
        dispatch(fetchProduct({name:'xs',status:true},sort));
        
    }, []);

    const handleChange = useCallback(
        event =>{
            setSort(event.target.value);
            dispatch(sortProduct(event.target.value))
        },
        []
    )
    const loading = () =>{
        loader.current.style.display='block'
        setTimeout(() => {
            loader.current.style.display='none'
        }, 500);
    }
    const updateSize = (size) =>{
        loading();
        dispatch(changeStatus(size));
        dispatch(fetchProduct({...size,status:!size.status},sort));
        
        
    }
    const loadSize = useMemo(() => {
        let string=[];
        for (const item in size) {
            string.push(<ProductSize key={item} item={size[item]} updateSize={ updateSize }  />)
        }
        return string;
    },[size,sort])
    const addCart = useCallback(
        id =>{
            dispatch(fetchCartWithId(id));
        },[]
    )
    return (
        <section className="product">
            <div className="product__loader" ref={loader}>
                <div className="product__loader-item"></div>
            </div>
            <div className="container">
                <div className="product__size">
                    <p>Size :</p>
                    <div className="product__size-list">
                        {loadSize}
                    </div>
                </div>
                <div className="product__box">
                    <ProductSort handleChange={handleChange} sort={sort} length={products.length} />
                    <div className="product__list">
                        {
                            products.map( p => 
                                <ProductItem  key={p.id} product={p} addCart={addCart} />
                            )
                        }
                    </div>
                </div>
            
                
            </div>
        </section>
    );
}

export default React.memo(Product);
