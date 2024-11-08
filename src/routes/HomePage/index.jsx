import React, {useEffect, useState} from 'react';
import {SearchBar} from "../../components/SearchBar/index.jsx";
import {fetchAllModeratedProducts} from "../../http/productAPI.js";
import ProductItem from "../../components/ProductItem/index.jsx";
import {message} from "antd";
import {fetchNextCategoryPaths} from "../../http/categoryPathAPI.js";
import {capitalize} from "../../utils/capitalize.js";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await fetchAllModeratedProducts().then(data => setProducts(data));
            await fetchNextCategoryPaths().then(data => setCategories(data));
        } catch (e) {
            message.error(e)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading)
        return <div>Loading...</div>

    return (
        <div>
            <div className="p-4 flex gap-4 items-center border-b-[1px] border-[#EBECEE]">
                <SearchBar/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z"
                        stroke="#0E0D35"/>
                    <path
                        d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                        stroke="#0E0D35"/>
                </svg>
            </div>

            <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h6 className="text-[24px] font-semibold">Категории</h6>
                    <div className="overflow-x-auto px-4 snap-x snap-mandatory">
                        <div className="flex gap-6">
                            {categories.map(category => (
                                <div key={category.id} className="flex flex-col items-center gap-[18px] max-w-[100px] cursor-pointer"
                                onClick={() => navigate(`/category/${category.path}`)}>
                                    <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={category.image.url}
                                            alt={category.name}
                                        />
                                    </div>
                                    <div className="text-[14px] text-center overflow-hidden whitespace-nowrap text-ellipsis w-full">
                                        {capitalize(category.path.split(".").pop().split("_").join(" "))}
                                    </div>
                                </div>
                            )).reduce((acc, item, index) => {
                                if (index % 2 === 0) acc.push([]);
                                acc[acc.length - 1].push(item);
                                return acc;
                            }, []).map((col, index) => (
                                <div key={index} className="flex flex-col gap-[24px]">
                                    {col}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[40px]">
                    <h6 className="text-[24px] font-semibold">Новинки 🔥</h6>
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-4">
                        {Array.from({length: 6}).map((_, index) =>
                            <ProductItem key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;