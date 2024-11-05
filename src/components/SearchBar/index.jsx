import {Input, Image} from "antd";
import searchIcon from "../../assets/icons/Search.svg"
import {useEffect, useState} from "react";

export const SearchBar = ({search, setSearch}) => {
    const [inputValue, setInputValue] = useState(search);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearch(inputValue);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue, setSearch]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <Input
            prefix={<Image src={searchIcon} preview={false} />}
            placeholder="Поиск"
            className="bg-[#F8F8F9] rounded-[35px] border-none px-4 py-[6px]"
            value={inputValue}
            onChange={handleChange}
        />
    );
}