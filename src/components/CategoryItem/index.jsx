import {capitalize} from "../../utils/capitalize.js";
import {useNavigate} from "react-router-dom";

export const CategoryItem = ({category}) => {
    const navigate = useNavigate();

    return (
        <div className="rounded-lg overflow-hidden bg-[#F8F8F9] p-4 cursor-pointer"
            onClick={() => navigate(category.path)}
        >
            <div className="overflow-hidden whitespace-nowrap text-ellipsis w-full">
                {capitalize(category.path.split(".").pop().split("_").join(" "))}
            </div>
            <div className="flex h-full mt-3">
                <img alt={category.path} src={category.image.url} className="rounded-lg object-cover w-full max-h-[180px] object-center"/>
            </div>
        </div>
    );
};