import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchNextCategoryPaths} from "../../http/categoryPathAPI.js";
import {message} from "antd";
import {capitalize} from "../../utils/capitalize.js";

export const SubcategoryPage = () => {
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
                <button onClick={() => navigate("/category")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.9998 6L8.70696 11.2929C8.31643 11.6834 8.31643 12.3166 8.70696 12.7071L13.9998 18"
                              stroke="#0E0D35" strokeLinecap="round"/>
                    </svg>
                </button>
                <span className="uppercase w-full text-center">
                {path.split(".").pop().split("_").join(" ")}
                </span>
            </div>

            <div className="flex flex-col gap-6 px-8 py-6">
                {categories.map(category =>
                    <div key={category.id} className="flex items-center gap-4 cursor-pointer"
                         onClick={() => navigate(`/category/${category.path}/products`)}>
                        <img className="w-[90px] h-[90px] object-cover rounded-lg" src={category.image.url}
                             alt={category.path}/>
                        <span>{capitalize(category.path.split(".").pop().split("_").join(" "))}</span>
                    </div>
                )}
            </div>
        </>
    )
}