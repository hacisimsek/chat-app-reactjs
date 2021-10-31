import Input from '../components/Input'
import { ThemeContext } from "../context/ThemeContext";
import {useContext} from 'react'


export default function SearchInput({setSearchTerm, searchTerm}) {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ?"search-input-div-dark" :"search-input-div"}>
      <Input
        type="text"
        placeholder="Search.."
        value={searchTerm}
        onChange={event => {setSearchTerm(event.target.value)}}
      />
    </div>
  );
}
