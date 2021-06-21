import './HiddenList.css';
import classNames from "classnames";

const HiddenList = ({items, visible}) => {

    return (
        <ul className='hidden-list'>
            {items.map((item, index) => <li className={classNames({hidden: visible})} key={index}>{item}</li>)}
        </ul>
    )
}

export default HiddenList;