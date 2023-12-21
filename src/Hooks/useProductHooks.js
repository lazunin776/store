import React, { useState } from 'react'

const useProductHooks = () => {
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('')
  const [articul, setArticul] = useState('articul');
  const [category, setCategory] = useState('category');
  const [subcategory, setSubcategory] = useState('subcategory');

  return {rate, setRate, articul, setArticul, category, setCategory,
   subcategory, setSubcategory, price, setPrice, description, setDescription}
}

export default useProductHooks