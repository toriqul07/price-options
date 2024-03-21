import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    const price_options = [
        {
            "id": 1,
            "name": "Basic",
            "price": "29.99/month",
            "features": [
                "Access to cardio equipment",
                "Access to strength training equipment",
                "Access to locker rooms and showers",
                "24/7 access to the gym facilities",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "49.99/month",
            "features": [
                "All Basic features",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Access to indoor track",
                "Access to basketball court"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "79.99/month",
            "features": [
                "All Standard features",
                "Access to personal training sessions (2 per month)",
                "Access to swimming pool",
                "Access to hot tub",
                "Towel service included"
            ]
        }
    ];


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    price_options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;