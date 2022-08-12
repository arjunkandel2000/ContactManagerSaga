/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useMemo, useState } from 'react';

const carsList = [
  { name: 'Audi', country: 'Germany' },
  { name: 'BMW', country: 'Germany' },
  { name: 'Chevrolet', country: 'USA' },
  { name: 'Citroen', country: 'France' },
  { name: 'Hyundai', country: 'South Korea' },
  { name: 'Mercedes-Benz', country: 'Germany' },
  { name: 'Renault', country: 'France' },
  { name: 'Seat', country: 'Spain' },
  { name: 'Dodge', country: 'USA' },
  { name: 'BMW', country: 'Germany' },
  { name: 'Tesla', country: 'USA' },
  { name: 'Volkswagen', country: 'Germany' },
  { name: 'Hyundai', country: 'South Korea' },
  { name: 'Jaguar', country: 'United Kingdom' },
  { name: 'GMC', country: 'USA' },
  { name: 'Bentley', country: 'United Kingdom' },
];

export default function Cars() {
  const [cars] = useState(carsList);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);

  const showMore = () => {
    if (numberOfitemsShown + 3 <= cars.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 3);
    } else {
      setNumberOfItemsToShown(cars.length);
    }
  };

  const itemsToShow = useMemo(() => {
    return cars.slice(0, numberOfitemsShown).map((car, index) => <li key={car.name + index}>{car.name}</li>);
  }, [cars, numberOfitemsShown]);

  return (
    <div>
      <ul>{itemsToShow.length ? itemsToShow : 'Loading...'}</ul>
      <button onClick={showMore}>show more</button>
    </div>
  );
}
