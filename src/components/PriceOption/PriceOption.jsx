import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='bg-blue-500 rounded-md p-4 flex flex-col text-white'>
            <h2 className='text-center'>
                <span className='text-2xl font-extrabold'>{price}</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-700 w-full py-2 font-bold rounded-lg hover:bg-green-900'>buy now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;