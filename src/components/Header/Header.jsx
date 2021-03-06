import './Header.scss';

import { Link } from 'react-router-dom';

//Images
import UserPic from '../../assets/img/Userpic.png';

//Components
import Logo from '../Lib/Svgs/Logo';
import Video from '../Lib/Svgs/Video';
import CombinedShape from '../Lib/Svgs/Combined-shape';
import NotificationIcon from '../Lib/Svgs/Notification';
import Menu from '../Lib/Svgs/Menu';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <button className="header__btn">
                    <Menu />
                </button>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="header__center">
                <input
                    className="header__search-input"
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="header__right">
                <div className="header__right-menues">
                    <Link className="header__right-icons-wrapper" to="/">
                        <button className="header__right-icons">
                            <Video />
                        </button>
                    </Link>
                    <Link className="header__right-icons-wrapper" to="/">
                        <button className="header__right-icons">
                            <CombinedShape />
                        </button>
                    </Link>
                    <Link className="header__right-icons-wrapper" to="/">
                        <button className="header__right-icons">
                            <NotificationIcon />
                            <span className="badge">3</span>
                        </button>
                    </Link>
                </div>
                <Link to="/">
                    <img src={UserPic} alt={'user'} width={30} height={30} />
                </Link>
            </div>
        </header>
    );
};

export default Header;
