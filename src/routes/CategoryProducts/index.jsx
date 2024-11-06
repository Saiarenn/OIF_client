import ProductItem from "../../components/ProductItem/index.jsx";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {capitalize} from "../../utils/capitalize.js";
import {fetchNextCategoryPaths} from "../../http/categoryPathAPI.js";
import {message} from "antd";

export const CategoryProducts = () => {
    const {path} = useParams();

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await fetchNextCategoryPaths(path).then(data => setCategories(data));
        } catch (e) {
            message.error(e)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [path])

    if (loading) return <div>Loading...</div>

    return (
        <>
            <div className="px-6 py-4 flex border-b-[1px] border-[#EBECEE]">
                <button onClick={() => navigate(`/category/${path.split(".").shift()}`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>
                <span className="uppercase w-full text-center">
                {capitalize(path.split(".").pop().split("_").join(" "))}
                </span>
            </div>

            <div className="flex border-b-[1px] border-[#EBECEE]">
                <div className="px-4 py-2 uppercase flex gap-2 items-center w-full justify-center">Сортировка
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path
                            d="M13.7797 6.46667L9.43306 10.8133C8.91973 11.3267 8.07973 11.3267 7.56639 10.8133L3.21973 6.46667"
                            stroke="#292D32" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="px-4 py-2 uppercase w-full text-center relative">
                    Фильтр
                    <span className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 h-[70%] border-l-[1px] border-[#EBECEE]"></span>
                </div>
            </div>


            <div className="grid grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-y-6 gap-x-4 py-8 px-6">
                {Array.from({length: 10}).map((_, index) =>
                    <ProductItem key={index}/>
                )}
            </div>
        </>
    )
}