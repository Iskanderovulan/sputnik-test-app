import React from "react";
import cls from "./ProductCard.module.scss";

interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: "RUB" | "USD" | "EUR";
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, origin, price, currency, imageUrl } = props;

  const formattedPrice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
  }).format(price / 100);

  return (
    <div className={cls.card}>
      <div className={cls.imageWrapper}>
        <img src={imageUrl} alt={title} className={cls.image} />
      </div>
      <div className={cls.info}>
        <h2 className={cls.title}>{title}</h2>
        <p className={cls.origin}>{origin}</p>
        <p className={cls.price}>{formattedPrice}</p>
      </div>
    </div>
  );
};
