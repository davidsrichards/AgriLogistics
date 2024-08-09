function PricingList({ value, price }) {
  return (
    <li className="flex w-full items-center justify-between py-3">
      <p>{value}</p>
      <p>{price}</p>
    </li>
  );
}

export default PricingList;
