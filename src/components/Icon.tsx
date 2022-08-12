require('iconfont/money.svg');
require('iconfont/tags.svg');
require('iconfont/statistics.svg');

type Props = {
    name: string;
}

const Icon = (props: Props) => {
    return (
        <svg className="icon" >
            <use xlinkHref={'#' + props.name} />
        </svg>)
}

export default Icon;