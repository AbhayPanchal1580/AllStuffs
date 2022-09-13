import React from 'react'

const Car = (props) => {
    const car = props.myCar;
    return <div>
        <div>
        <h3>Model : {car.model} </h3>
        <h3>company : {car.company} </h3>
        <h3>price : {car.price} </h3>
        <ul style={{ listStyle: 'none' }}>
            <li style={{ fontWeight: '900' }}>Configuration</li>
            <li>color : {car.configuration.color}  </li>
            <li>fuel : {car.configuration.fuel}  </li>
            <li>cylinder : {car.configuration.cylinder}  </li>
            <li>fuelTankCapacity : {car.configuration.fuelTankCapacity}  </li>
            <ul style={{ listStyle: 'none' }}>
                <li style={{ fontWeight: '900' }}>mileage : </li>
                <li>City : {car.configuration.mileage.city}</li>
                <li>highway : {car.configuration.mileage.highway}</li>
            </ul>
        </ul>
        <ul style={{ listStyle: 'none' }}>
            <li style={{ fontWeight: '900' }} >Features : </li>
            {
                car.features.map((car) => {
                    return <li>
                        {car}
                    </li>
                })
            }
        </ul>
    </div>

    </div>
    
}

const CarList = () => {

    const car = {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
            color: 'gray',
            fuel: 'petrol',
            cylinder: 4,
            fuelTankCapacity: 37,
            mileage: {
                city: 14,
                highway: 20,
            },
        },
        features: ['touch screen', 'bluetooth', 'alloy wheels', 'powersteering'],
    }
    return (
        <div>
            <Car myCar={car} />
        </div>
    )
}

export default CarList
