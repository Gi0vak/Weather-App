import './index.css';
import Logo from './Logo'
import SearchBar from './Searchbar'
import ButtonDegree from './ButtonDegree';
const TopBar = ({ onSearch }) => {
    return (
        <nav>
            <Logo />
            <SearchBar onSearch={onSearch} />
            <ButtonDegree />
        </nav>
    )

}
export default TopBar;
