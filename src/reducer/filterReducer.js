const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":

        let priceArr = action.payload.map((curElem) => curElem.price);
        // console.log(priceArr); // TESTED ✅

        // TO FIND THE LARGEST PRICE - 3 WAYS :

        // 1st Way - using Math.max.apply() =>
        // console.log(Math.max.apply(null, priceArr)); // TESTED - 729900 ✓

        // 2nd Way - using Array.reduce() =>
        // let maxPrice = priceArr?.reduce((acc, curElem) => Math.max(acc, curElem), 0);
        // console.log(maxPrice); // TESTED - 729900 ✓

        // 3rd Way - using spread operator with Math.max() =>
        let maxPrice = Math.max( ...priceArr );
        // console.log(maxPrice); // TESTED - 729900 ✓

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
        return {
            ...state,
            grid_view: true,
        };

    case "SET_LIST_VIEW":
        return {
            ...state,
            grid_view: false,
        }

    case "GET_SORT_VALUE":
        return {
            ...state,
            sorting_value: action.payload,
        }

    case "SORTING_PRODUCTS":
        let newSortData;

        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];

        const sortingProducts = (a, b) => {

            // Ascending Order - Price
            if (sorting_value === "lowest") {
                return a.price - b.price;
            }

            // Descending Order - Price
            if (sorting_value === "highest") {
                return b.price - a.price;
            }

            // Ascending Order - Name
            if (sorting_value === "a-z") {
                return a.name.localeCompare(b.name);
            }

            // Descending Order - Name
            if (sorting_value === "z-a") {
                return b.name.localeCompare(a.name);
            }
        }

        newSortData = tempSortProduct.sort(sortingProducts);

        return {
            ...state,
            filter_products: newSortData,
        }

    case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;

        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value,
            }
        };

    case "FILTER_PRODUCTS":
        let { all_products } = state;
        let tempFilterProduct = [...all_products];

        const { text, category, brand, price } = state.filters;

        if (text) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
            })
        }

        if (category !== "All") {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.category === category;
            })
        }

        if (brand !== "All") {
            tempFilterProduct = tempFilterProduct.filter((curElem) => {
                return curElem.brand === brand;
            })
        }

        if (price === 0) {
            tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price === price);
        } else {
            tempFilterProduct = tempFilterProduct.filter((curElem) => curElem.price <= price);
        }

        return {
            ...state,
            filter_products: tempFilterProduct,
        };

    default:
      return state;
  }
};

export default filterReducer;
