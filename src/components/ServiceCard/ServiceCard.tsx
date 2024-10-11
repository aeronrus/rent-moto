import React from 'react';

import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import './ServiceCard.css';
import PriceSale from '../../ui-kit/PriceSale/PriceSale';

interface IServiceCardProps {
  serviceData: {
    img: string;
    title: string;
    description: string;
    price: string[];
  };
}

const ServiceCard: React.FC<IServiceCardProps> = ({ serviceData }) => {
  return (
    <div className="service">
      <img src={serviceData.img} alt="kayo k1" className="service__img" />
      <div className="service__title">{serviceData.title}</div>
      <p className="service__description">{serviceData.description}</p>
      <div className="service__price">
        <PriceSale prices={serviceData.price} />
      </div>
      <div>
        <RequestButton title="Записаться" />
      </div>
    </div>
  );
};

export default ServiceCard;
