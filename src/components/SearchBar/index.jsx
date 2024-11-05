import {Input, Image} from "antd";
import searchIcon from "../../assets/icons/Search.svg"

export const SearchBar = () => {
    return (
        <Input prefix={<Image src={searchIcon} preview={false}/>} placeholder="Поиск" rootClassName={"bg-[#F8F8F9] rounded-[35px] border-none px-4 py-[6px]"}/>
    )
}