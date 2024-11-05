import {SearchBar} from "../../components/SearchBar/index.jsx";
import React, {useEffect, useState} from "react";
import {fetchAllModeratedProducts} from "../../http/productAPI.js";
import {fetchNextCategoryPaths} from "../../http/categoryPathAPI.js";
import {message} from "antd";
import {CategoryItem} from "../../components/CategoryItem/index.jsx";

export const CategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await fetchNextCategoryPaths("женская_одежда").then(data => setCategories(data));
        } catch (e) {
            message.error(e)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="px-6 py-4 uppercase w-full text-center border-b-[1px] border-[#EBECEE]">Категории</div>

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

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 px-8 py-6">
                {categories.map(category =>
                    <CategoryItem category={category} key={category.id}/>
                )}
            </div>
        </div>
    )
}