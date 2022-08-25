/*eslint-disable*/
import cs from 'classnames';
require('iconfont/money.svg');
require('iconfont/tags.svg');
require('iconfont/statistics.svg');
require('iconfont/right.svg');
require('iconfont/left.svg');


// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }

type Props = {
    name?: string;
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const { name, children, className, ...rest } = props;
    return (
        <svg className={cs('icon', className)} {...rest}>
            <use xlinkHref={'#' + props.name} />
        </svg>)
}

export default Icon;